type PropsType = {
  titleValue: string;
  colapsed?: boolean;
   
};

export function Acordion(props: PropsType) {
  return (
    <div>
      <AcordionTitle title={props.titleValue} />
      {props.colapsed === true && <AcordionBody />}
    </div>
  );
}

type AcordionTitleProps = {
  title: string;

 
};





export function AcordionTitle(props: AcordionTitleProps) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

export function AcordionBody() {
  return (
    <div className="AcordionBody">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
