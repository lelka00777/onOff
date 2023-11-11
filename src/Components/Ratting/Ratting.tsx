import { useState } from "react";

type RattingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};



export function Ratting(props: RattingPropsType) {
  console.log("Ratting render");
  const[star,setStar]=useState(props.value)
  return (


  
    <div className="Star">

       
      <Star selected={props.value > 0} />    <button>1</button>
      <Star selected={props.value > 1} />    <button>2</button>
      <Star selected={props.value > 2} />    <button>3</button>
      <Star selected={props.value > 3} />    <button>4</button>
      <Star selected={props.value > 4} />    <button>5</button>
    </div>
  );
}

type PropsStar = {
  selected: boolean;
  // onclick:()=>void
};

function Star(props: PropsStar) {
  console.log("Star rendering");

  return (
    <>
      {props.selected === true ? 
        <span>
          <b className="selected">★</b>
        </span>
      : 
        <span className="noselected">★</span>
      }
    </>
  );
}
