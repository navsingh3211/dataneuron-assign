import { NextRequest, NextResponse } from 'next/server';
import database from "../../../../database/config";
import hitCount from "../../../../database/showCount";
database();



export async function PATCH(req:NextRequest,{params:{userId}}:{params:{userId:string[]}}){
  
  console.log(userId);
}