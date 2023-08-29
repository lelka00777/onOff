import { useState } from "react";

type PropsType ={
onOfCallback:boolean
setOnOfCallback:()=>void
}



export const OnOfCalback = (props:PropsType) => {




const onStyle ={
    width:'30px',
    height:'20px',
  
    border:'1px solid black',
    display:'inline-block',
    marginLeft:'5px',
    padding:'2px',
    backgroundColor:props.onOfCallback?'green':'white'
  



}
const ofStyle ={
    width:'30px',
    height:'20px',
  
    border:'1px solid black',
    display:'inline-block',
    marginLeft:'15px',
    padding:'2px',
    backgroundColor:props.onOfCallback?'white':'red'
  
}
const indicatorStyle ={
    width:'10px',
    height:'10px',
    borderRadius:'5px',
    border:'1px solid black',
    display:'inline-block',
    marginLeft:'5px',
    backgroundColor:props.onOfCallback?'green':'red'}




  return (
    <div>
      <div style={onStyle} onClick={()=>{props.setOnOfCallback()}}>On</div> 
      <div style={ofStyle} onClick={()=>{props.setOnOfCallback()}}>Of</div> 
      <div style={indicatorStyle}></div>
    </div>
  );
};
