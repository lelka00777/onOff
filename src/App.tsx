import {useState} from "react";
import "./App.css";
import {OnOf} from "./Components/OnOf/OnOf";
import {OnOff} from "./Components/UncontrollOnOf/onOff";
import {UncontrollerAcordion} from "./Components/UncontrollAcordion/UncontrollAcordion";


import {Acordion} from "./Components/Acordion/Acordion";
import {ControlAcordion} from "./Components/ControlAccordion/ControlAcordion";
import {UncontrolRatting} from "./UncontrolRatting";
import {Button} from "./Components/Story/Button";

// import { Acordion } from "./Acordion";
// import { useState } from "react";
import { Ratting } from "./Ratting";
import {RatingType, Ratting1} from "./Components/Ratting/Ratting1";

function App() {
    let [rating,setRating]=useState<RatingType>(0)
    // const[clicks,setClick]=useState(false)

// const onclikHandler=(event:boolean)=>{
//     setClick(event)

// }

// const onClicHandler =(on:boolean)=>{
//   setOn(true)
// }

 // const[star,setStar]=useState<RattingValueType>(0)

//
// const buttonPlay =()=>{
//      console.log('dfdgdfg')
//   setStar(star)
// }

    return (

        <div className="App">
            <Button name={'Покажи'} />
            // как у димыча
            <Ratting1 value={rating} onClick={setRating}/>
            {/*<UncontrolRatting   />*/}
            {/*<OnOff/>*/}
            {/*<OnOf/>*/}
            {/*<Acordion titleValue={'menu'}/>*/}
            {/*<UncontrollerAcordion titleValue={''}/>*/}
            {/*<ControlAcordion*/}
            {/*    titleValue={'control'}*/}
            {/*    colapsed={true}*/}
            {/*    onClickhandel={()=>{}}*/}
            {/*/>*/}


            {/*<UncontrolRatting/>*/}
            {/*<Acordion   titleValue={'menu'}/>*/}
            {/*<UncontrollerAcordion titleValue={"нет ни че"}/>*/}

        </div>
    );
}

export default App;
