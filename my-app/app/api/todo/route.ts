import { NextRequest, NextResponse } from 'next/server';
import database from "../../../database/config";
import userData from "../../../database/userSchema";
import hitCount from "../../../database/showCount";
database();


export async function POST(req:NextRequest){
  try{
    //extract body
    const body = await req.json();
    
    //store the body in the database
    await userData.deleteMany();
    await userData.create({
        name:body.name
    });

    const countData = await hitCount.find({});
  
    if(countData.length === 0){
      await hitCount.create({
        count:1
      });
    }else{
      await hitCount.updateOne({_id:countData[0]._id},
        { $inc: { count: 1 } }
      )
    }

    return NextResponse.json({
      success:true,
      messsage:"User has been created successfully!"
    })
  }catch(error:any){
    console.log(error);
  }
}

export async function GET(req:NextRequest){
  try{
    const countData = await hitCount.find({});

    const finalCount = countData.length!==0 ? countData[0].count : 0;

    return NextResponse.json({
      success:true,
      messsage:"data",
      data:finalCount
    })
  }catch(error:any){
    console.log(error);
  }
}

