import { useState } from "react"


export const OnOff =()=>{
const[showe,setShowe]=useState(true)
const [onOff,setonOff]=useState(false)

    return(<div className="contener"> 
        
        <button className="on" onClick={()=>setonOff(!onOff)}>ВКЛ</button>
        <button className="of" onClick={()=>setonOff(!onOff)}>ВЫКЛ</button>
        {onOff?<div className="tabloOn"></div>: <div className="tablo"></div>}
       
        <button onClick={()=>setShowe(!showe)}>нажми на меня </button>
       {showe&&<button className={'btn'} onClick={()=>setShowe(showe)}>нажми на меня </button>&&<ul>
            <li>Html</li>
            <li>CSS</li>
            <li>J&S</li>
        </ul>}
       
       
       
       
       
      

   
        
        
        </div>)
}