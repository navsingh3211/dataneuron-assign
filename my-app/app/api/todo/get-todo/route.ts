import { NextRequest, NextResponse } from 'next/server';
import database from "../../../../database/config";
import userData from "../../../../database/userSchema";

database();

export async function GET(req:NextRequest){
  try{
    
    const userDetails = await userData.find({},{ name: 1 });
    // console.log(userDetails,'userDetails')
    return NextResponse.json({
      success:true,
      messsage:"data!",
      data:userDetails
    })
  }catch(error:any){
    console.log(error);
  }
}