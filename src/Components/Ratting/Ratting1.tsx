import { useState } from "react";
// type PropsType={
//   value?:number
//   setStar?:(star:number)=>void
// }
type RattingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
    value:RatingType
    onClick:(value:RatingType)=>void
};
export type RatingType=0 | 1 | 2 | 3 | 4 | 5

export function Ratting1(props: RattingPropsType) {

    // const [value,setvalue]=useState(0)




    return (



        <div className="Star">


            <Star selected={props.value > 0} />   <button onClick={()=>props.onClick(1)}>1</button>
            <Star selected={props.value > 1} />   <button onClick={()=>props.onClick(2)}>2</button>
            <Star selected={props.value > 2} />   <button onClick={()=>props.onClick(3)}>3</button>
            <Star selected={props.value > 3} />   <button onClick={()=>props.onClick(4)}>4</button>
            <Star selected={props.value > 4} />   <button onClick={()=>props.onClick(5)}>5</button>
        </div>
    );
}

type PropsStar = {
    selected: boolean;
    // onclick:()=>void
};

function Star(props: PropsStar) {


    return (
        <>
            {props.selected  ?
                <span>
          <b className="selected">★</b>
        </span>
                :
                <span >★</span>
            }
        </>
    );
}