
import "./App.css";
import { OnOf } from "./Components/OnOf";
import { OnOff } from "./onOff";
import { UncontrollerAcordion } from "./UncontrollAcordion";
import { Ratting } from "./Ratting";
import { UncontrolRatting } from "./UncontrolRatting";
import { AcordionCallback } from "./AcordionCallbak";
import { useState } from "react";
import { RattingCallback } from "./RattingCallback";
import { RatinType, RattingCallbackType } from "./RattingCallbackType";
import { UncontrolRattingAnonimFunction } from "./UncontrolRattingAnonimFunction";
import { OnOfCalback } from "./Components/onOfCalback";
import { Input } from "./Components/Input";
import { Destructur } from "./Components/Destructur";
// import { Acordion } from "./Acordion";
// import { Ratting } from "./Ratting";




export type PersonType={

  name:string
  age:number
  ferstName:string
  adress:AdressType[]
  }
  type AdressType={
    street:string
    houses:number
    kvartira:number
  }
  const peson = {
  name:'lelka', 
  age:23,
  ferstName:'lezova',
  adress:[
    {street:'turistskay',
    houses:30,
    kvartira:409}]
  }

function App() {
///======================= код к AcordionCallback =============================================
const [colapsed,setColapsed] = useState(false)
const colapsedHandler =()=>{
  setColapsed(!colapsed) 
// Переключаем состояние между true и false
}
// ==============================================================
// ====================== код к RattingCallback =======================
const[value, setValue]=useState<number>(0)
// ==============================================================

// ====================== код к RattingCallbackType =============
// c типизацией Стейта
let[rating, setRating]=useState<RatinType>(0)
// ==============================================================
 //======================= код к onOfCalback ==================
 let [onOfCallback,setOnOfCallback]= useState(false)

// ====================================================

const props={name:'lelka', age:38,stack:'front'}

// const{name,age,stack}=props
// let res = name + age + stack + ' + '+  null+ "+ " + NaN +[' 78'] + {nam:99}
// console.log( res)




return (
    
 

    <div className="App">

<Destructur peson={peson}/>

{/* <UncontrolRattingAnonimFunction 
rating={rating}  
setRating={setRating} /> */}


      {/* <RattingCallbackType 
       rating={rating}
       setRating={setRating} /> */}
       
       

{/* <RattingCallback 
value={value}  
setValue={setValue}/> */}



{/* <AcordionCallback 
titleValue={"Жмякнуть"}  
colapsed={colapsed}
callback={colapsedHandler}

/> */}

  {/* < OnOff /> */}
    {/* <OnOf /> */}

 


{/* <UncontrolRatting  /> */}

{/* <UncontrollerAcordion titleValue={"нет ни че"} />  */}
{/* <Ratting value={3} />  */}

    {/* <OnOfCalback 
    onOfCallback={onOfCallback}
    setOnOfCallback={()=>setOnOfCallback(!onOfCallback)} /> */}
    {/* <Input /> */}
    </div>
  );
}

export default App;
