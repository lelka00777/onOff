import { log } from "console";

type PropsType = {
  titleValue: string;
  colapsed: boolean;
  callback:()=>void
   
};

export function AcordionCallback(props: PropsType) {


  return (
    <div>
      <AcordionTitle title={props.titleValue} callback={props.callback}/>
      {props.colapsed && <AcordionBody />}
    </div>
  );
}




type AcordionTitleProps = {
  title: string;
  callback:()=>void
 
};





export function AcordionTitle(props: AcordionTitleProps){

  
  return (
    <div>
      <h3 onClick={()=>props.callback()}>{props.title}</h3>
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
