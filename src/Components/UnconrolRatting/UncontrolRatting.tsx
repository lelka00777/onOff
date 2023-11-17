import { useState } from "react";
// type PropsType={
//   value?:number
//   setStar?:(star:number)=>void
// }
type RattingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5;
};



export function UncontrolRatting(props: RattingPropsType) {

const [value,setvalue]=useState(0)



  const handler =(star:number)=>{
    // props.setStar(star)
  }
  return (


  
    <div className="Star">

       
      <Star selected={value > 0} />   <button onClick={()=>setvalue(1)}>1</button>
      <Star selected={value > 1} />   <button onClick={()=>setvalue(2)}>2</button>
      <Star selected={value > 2} />   <button onClick={()=>setvalue(3)}>3</button>
      <Star selected={value > 3} />   <button onClick={()=>setvalue(4)}>4</button>
      <Star selected={value > 4} />   <button onClick={()=>setvalue(5)}>5</button>
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
