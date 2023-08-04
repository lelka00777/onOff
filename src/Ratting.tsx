type RattingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function Ratting(props: RattingPropsType) {
  console.log("Ratting render");

  return (
    <div className="Star">
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
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
