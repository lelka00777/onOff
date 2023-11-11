import {action} from '@storybook/addon-actions'; // ---------     для информации вывода в консоль сторибука

import {Acordion} from './Acordion';
import {UncontrollerAcordion} from "../UncontrollAcordion/UncontrollAcordion";
import {ControlAcordion} from "../ControlAccordion/ControlAcordion";
import {useState} from "react";
// import {Story} from "@storybook/blocks";

export default {            // синтаксис  для реакта  импорт компоненты
    component: Acordion
}


const onClickHandker = action('lala') // -----------     синтаксис для addon-actions

export const DemoAccordion = () => {

    return <Acordion titleValue={'DemoAccordion'}/>
}

// export const DemoAcordeonWork = () => {
//     const [click, setClick] = useState(true)
//
//     // @ts-ignore
//
//     return (
//         <ControlAcordion titleValue={'control colapsed'}
//                          colapsed={click}
//                          onClickhandel={console.log('gfdgdg')
//                          }
//         />
//     )
// }


export const OpenAcordeon = () => {

    return (
        <ControlAcordion titleValue={'control colapsed'}
                         colapsed={true}/>
    )
}

export const ColapsedAcordeon = () => {
    return (
        <ControlAcordion titleValue={'colapsed'}
                         colapsed={false}/>
    )
}
