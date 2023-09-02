import { PersonType } from "../App"

type PropsType={
    peson:PersonType
}




export const Destructur:React.FC<PropsType> =(props)=>{
const {name,age,...restProps} = props.peson
const [{street,houses,kvartira}]=props.peson.adress

    return(<>
    
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h3>{street}</h3>
    <h4>{houses}</h4>
    <h5>{kvartira}</h5>
    <h6>{props.peson.ferstName}</h6>
    </>)
}