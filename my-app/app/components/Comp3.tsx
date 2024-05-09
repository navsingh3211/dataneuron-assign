/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useEffect,useState } from "react";
import axios from 'axios';

export default function(){
  const [data,setData] = useState(0);
  useEffect(()=>{
    const fetchData = async ()=>{
      const countData = await axios.get('http://localhost:3000/api/todo');
      setData(countData.data.data);
      // console.log(countData.data.data,'countData');
    }
    fetchData();
  },[]);
  return <div>
        <br />
        <p>Count is: {data}</p>
    </div>
}