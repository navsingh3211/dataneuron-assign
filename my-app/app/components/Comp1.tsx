/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import {useState} from 'react';
import axios from 'axios';

export default function(){
  const [data,setData] = useState("");
  async function onSubmitHandler(e:any){
    try{
      e.preventDefault();
      // console.log(data,"ram")
      const response = await axios.post("http://localhost:3000/api/todo",{
        name:data
      });
    }catch(error){
      console.log(error)
    }
  }

  return <div className={"grow bg-darker contents"}>
        <h2 className="text-lg font-semibold">Com1</h2>
        <input className={"bg-black"} type="text" placeholder="enter data" onChange={(e)=>setData(e.target.value)}/>
        <button onClick={onSubmitHandler} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit</button>
  </div>
}