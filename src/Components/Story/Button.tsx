import {useState} from "react";

type PropsType={
    name:string


}


export const Button:React.FC<PropsType> =(props)=>{
    const[click,setClick]=useState(false)

const onClickHandler =()=>{
setClick(!click)
}

    return(
        <div>
            <div onClick={onClickHandler}>{props.name}</div>
            {click&&<Spisok />}
        </div>
    )
}

type SpisokPropsType ={

}

const Spisok =(props:SpisokPropsType)=>{
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>

            </ul>
        </div>
    )
}