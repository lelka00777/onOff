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
    const inputRef = useRef<HTMLInputElement | null>(null)


    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setVAlue(el.value)
    }


    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value :
        {value}
    </>
}


export const ControledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }

    return <>
        <input value={parentValue} onChange={onChange}/>{parentValue}</>
}
export const ControledChekbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }
    return <>
        <input type={"checkbox"} checked={parentValue} onChange={onChange}/>{parentValue?'true':'false'}</>
}

export const ControledSelect = () => {
    const [value, setValue] = useState('2')
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    }

return<select value={value} onChange={onChange}>
    <option  >none</option>
    <option value={'1'} >SP</option>
    <option value={'2'}>Minsk</option>
    <option value={'3'}>Kiev</option>
</select>
}


export const ConontrolledInputWithFixedValue = () => <input value={'hello by'}/>




