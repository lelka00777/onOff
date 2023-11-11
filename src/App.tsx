import {useState} from "react";
import "./App.css";
import {OnOf} from "./Components/OnOf/OnOf";
import {OnOff} from "./Components/UncontrollOnOf/onOff";
import {UncontrollerAcordion} from "./Components/UncontrollAcordion/UncontrollAcordion";
import {Ratting} from "./Components/Ratting/Ratting";
import {UncontrolRatting} from "./Components/UnconrolRatting/UncontrolRatting";
import {Acordion} from "./Components/Acordion/Acordion";
import {ControlAcordion} from "./Components/ControlAccordion/ControlAcordion";
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

            {/*<OnOff/>*/}
            <OnOf/>
            <Acordion titleValue={'menu'}/>
            <UncontrollerAcordion titleValue={''}/>
            <ControlAcordion
                titleValue={'control'}
                colapsed={true}
                onClickhandel={()=>{}}
            />


            {/*<UncontrolRatting/>*/}
            {/*<Acordion   titleValue={'menu'}/>*/}
            {/*<UncontrollerAcordion titleValue={"нет ни че"}/>*/}

        </div>
    );
}

export default App;
