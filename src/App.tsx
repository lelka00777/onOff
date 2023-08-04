import "./App.css";
import { OnOff } from "./onOff";
// import { Acordion } from "./Acordion";
// import { useState } from "react";
// import { Ratting } from "./Ratting";

function App() {
    // const[clicks,setClick]=useState(false)

// const onclikHandler=(event:boolean)=>{
//     setClick(event)

// }

  return (
    <div className="App">
      {/* <Acordion 
      
      titleValue="Menu" 
      colapsed={clicks} />
       <Acordion 
      titleValue="Users" 
      colapsed={clicks} /> */}
   < OnOff />
{/* <Ratting value={0}/>
<Ratting value={0}/>
<Ratting value={0}/>
<Ratting value={0}/>
<Ratting value={0}/> */}
    
    </div>
  );
}

export default App;
