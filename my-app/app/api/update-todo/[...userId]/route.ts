import { NextRequest, NextResponse } from 'next/server';
import database from "../../../../database/config";
import userData from "../../../../database/userSchema";
import hitCount from "../../../../database/showCount";
database();


export async function PUT(req:NextRequest,{params:{userId}}:{params:{userId:string}}){
  try{
    //extract body
    const body = await req.json();
    
    //store the body in the database
    
    await userData.updateOne({_id:userId},{
      $set:{
        name:body.name
      }
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

    return Response.json({
      success:true,
      messsage:"User has been updated successfully!"
    })
  }catch(error:any){
    console.log(error);
  }
}