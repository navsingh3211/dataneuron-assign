/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
"use client"
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";
import Comp3 from "../components/Comp3";
import { useResizable } from "react-resizable-layout";
import SampleSplitter from "../components/Codespliter";
import { useState,useEffect } from "react";
import axios from 'axios';

export default function(){
  let [userdata,setUserdata] = useState("");
  let [id,setId] = useState("");
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async()=>{
    const datafinal = await axios.get("http://localhost:3000/api/todo/get-todo");
    if(datafinal.data.data.length>0){
      setUserdata(datafinal.data.data[0].name);
      setId(datafinal.data.data[0]._id);
      // console.log(datafinal.data.data[0])
    }
  }
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    splitterProps: terminalDragBarProps
  } = useResizable({
    axis: "y",
    initial: 150,
    min: 50,
    reverse: true
  });
  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps
  } = useResizable({
    axis: "x",
    initial: 250,
    min: 50
  });
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    splitterProps: pluginDragBarProps
  } = useResizable({
    axis: "x",
    initial: 200,
    min: 50,
    reverse: true
  });

  return (
    <div
      className={
        "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
      }
    >
      <div className={"flex grow"}>
        <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={"flex grow"}>
          <Comp1/>
          <SampleSplitter
            isDragging={isPluginDragging}
            {...pluginDragBarProps}
          />
          <div
            className="shrink-0 contents"
            style={{ width: pluginW }}
          >
            <Comp2 userdata={userdata} userId={id}/>
          </div>
        </div>
      </div>
      <SampleSplitter
        dir={"horizontal"}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div
        className="shrink-0 contents"
        style={{ height: terminalH }}
      >
        <Comp3/>
      </div>
    </div>
  );
    
}


