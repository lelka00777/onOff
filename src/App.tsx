import { useState } from "react";
import "./App.css";
import { OnOf } from "./Components/OnOf";
import { OnOff } from "./onOff";
import { UncontrollerAcordion } from "./UncontrollAcordion";
import { Ratting } from "./Ratting";
import { UncontrolRatting } from "./UncontrolRatting";
// import { Acordion } from "./Acordion";
// import { useState } from "react";
// import { Ratting } from "./Ratting";

function App() {
    // const[clicks,setClick]=useState(false)

// const onclikHandler=(event:boolean)=>{
//     setClick(event)

// }

// const onClicHandler =(on:boolean)=>{
//   setOn(true)
// }
type RattingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};
// const[star,setStar]=useState(0)


// const buttonPlay =(star:number)=>{
//   setStar(star)
// }

  return (
    
    <div className="App">
      {/* <Acordion 
      
      titleValue="Menu" 
      colapsed={clicks} />
       <Acordion 
      titleValue="Users" 
      colapsed={clicks} /> */}
   {/* < OnOff /> */}
   {/* <OnOf />

 
   {/* <OnOf on={on} callback={onClicHandler}/>
   <OnOf on={on} callback={onClicHandler}/> */}

<UncontrolRatting  />

<UncontrollerAcordion titleValue={"нет ни че"} /> 
    
    </div>
  );
}

export default App;
