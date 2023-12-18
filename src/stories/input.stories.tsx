import {action} from '@storybook/addon-actions';
import {ChangeEvent, useRef, useState} from "react";


export default {
    title: "input",// синтаксис  для реакта  импорт компоненты
    // component: OnOf,
}


export const IncontrolledInput = () => <input value={'hello'}/>


export const TerkValueUncontrolledInputWithFixedValue = () => {

    const [value, setVAlue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVAlue(e.currentTarget.value)
    }
    return <><input value={value} onChange={onChange}/>{value}
    </>
}
export const GetValueOfUncontrolledInputWithInputButtonPress = () => {

    const [value, setVAlue] = useState('')
    const inputRef=useRef<HTMLInputElement | null>(null)


const save = ()=> {
  const el =  inputRef.current as HTMLInputElement
    setVAlue(el.value)
    }


    return <>
        <input ref={inputRef}/>
        <button onClick={save }>save</button> - actual value :
        {value}
    </>
}


export const ConontrolledInputWithFixedValue = () => <input value={'hello by'}/>




