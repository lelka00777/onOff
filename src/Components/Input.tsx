import { ChangeEvent,  useState } from "react"


export const Input=()=>{
    const [event,setEvent]= useState('')

const onCengeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
    
    setEvent(event.currentTarget .value)
}


    return(<>
     <h1>{event}</h1>
     <input onChange={onCengeHandler}></input>
     <button onClick={()=>{}}>+</button>
     <h3>{event}</h3>
    
    </>
        

       
    )
}