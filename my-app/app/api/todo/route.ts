import { NextRequest, NextResponse } from 'next/server';
import database from "../../../database/config";
import userData from "../../../database/userSchema";
database();


export async function POST(req:NextRequest){
  try{
    //extract body
    const body = await req.json();
    console.log(body,'body is:');
    
    //store the body in the database
    await userData.deleteMany();
    await userData.create({
        name:body.name
    });

    return NextResponse.json({
      messsage:"User has been created successfully!"
    })
  }catch(error:any){
    console.log(error);
  }
}

export async function PUT(req:NextRequest){
  try{
    //extract body
    const body = await req.json();
    
    //store the body in the database
    
    await userData.updateOne({_id:body.userId},{
      $set:{
        name:body.name
      }
    });

    return Response.json({
      messsage:"User has been updated successfully!"
    })
  }catch(error:any){
    console.log(error);
  }
}

