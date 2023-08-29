import { useState } from "react";
// контролируемая компонента

export type RatinType = 0|1|2|3|4|5

type RattingPropsType = {
  rating:RatinType
  setRating: (rating: RatinType) => void;
};

export function RattingCallbackType(props: RattingPropsType) {
  return (
    <div className="Star">
      <Star
        selected={props.rating >= 1}
        setRating={() => props.setRating(1)}
        rating={1}
      />
      <Star
        selected={props.rating >= 2}
        setRating={() => props.setRating(2)}
        rating={2}
      />
      <Star
        selected={props.rating >= 3}
        setRating={() => props.setRating(3)}
        rating={3}
      />
      <Star
        selected={props.rating >= 4}
        setRating={() => props.setRating(4)}
        rating={4}
      />
      <Star
        selected={props.rating >= 5}
        setRating={() => props.setRating(5)}
        rating={5}
      />
    </div>
  );
}

type PropsStar = {
  selected: boolean;
  setRating: (rating: RatinType) => void;
  rating:RatinType
};

function Star(props: PropsStar) {
 

  return (
    <span onClick={()=>{props.setRating(props.rating)}}>
    {props.selected ? <b className="selected">★</b> : <span className="noselected">★</span>}
    </span>
  );
}
{
  /* <span onClick={props.callback}>
{props.selected ? <b className="selected">★</b> : <span className="noselected">★</span>}
</span> */
}
