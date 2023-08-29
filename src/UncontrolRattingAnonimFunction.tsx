import { useState } from "react";
export type RatinType = 0|1|2|3|4|5

type RattingPropsType = {
  rating:RatinType
  setRating: (rating: RatinType) => void;
};


export function UncontrolRattingAnonimFunction(props: RattingPropsType) {





  
  return (


  
    <div className="Star">

       
      <Star selected={props.rating >= 0} setRating={() => { props.setRating(1) } }  />   
      <Star selected={props.rating >= 1} setRating={() => { props.setRating(2) } }  />      
      <Star selected={props.rating >= 2} setRating={() => { props.setRating(3) } }  />      
      <Star selected={props.rating >= 3} setRating={() => { props.setRating(4) } }  />      
      <Star selected={props.rating >= 4} setRating={() => { props.setRating(5) } }  />     
    </div>

  );

  }
type PropsStar = {
  selected: boolean;
  setRating: () => void;

};

function Star(props: PropsStar) {
 

  return  (
    <span onClick={props.setRating}>
    {props.selected ? <b className="selected">★</b> : <span className="noselected">★</span>}
    </span>
  );
}
