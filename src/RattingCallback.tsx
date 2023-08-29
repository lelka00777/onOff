import { useState } from "react";
// контролируемая компонента
type RattingPropsType = {
  value:number
  setValue: (value: number) => void;
};

export function RattingCallback(props: RattingPropsType) {
  return (
    <div className="Star">
      <Star
        selected={props.value >= 1}
        setValue={() => props.setValue(1)}
        value={1}
      />
      <Star
        selected={props.value >= 2}
        setValue={() => props.setValue(2)}
        value={2}
      />
      <Star
        selected={props.value >= 3}
        setValue={() => props.setValue(3)}
        value={3}
      />
      <Star
        selected={props.value >= 4}
        setValue={() => props.setValue(4)}
        value={4}
      />
      <Star
        selected={props.value >= 5}
        setValue={() => props.setValue(5)}
        value={5}
      />
    </div>
  );
}

type PropsStar = {
  selected?: boolean;
  setValue: (value:1|2|3|4|5) => void;
  value:1|2|3|4|5
};

function Star(props: PropsStar) {
  console.log("Star rendering");

  return (
    <span onClick={()=>{props.setValue(props.value)}}>
    {props.selected ? <b className="selected">★</b> : <span className="noselected">★</span>}
    </span>
  );
}
{
  /* <span onClick={props.callback}>
{props.selected ? <b className="selected">★</b> : <span className="noselected">★</span>}
</span> */
}
