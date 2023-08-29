import { useState } from "react";

type PropsType = {
  titleValue: string;
  colapsed?: boolean;
};

export function UncontrollerAcordion(props: PropsType) {
  const [colapsed, setColapsed] = useState(false);

  const buttonStyle = {backgroundColor:'blue',color:'white',  
    padding:'2px',}



  const hanDler = () => {

    // if(!colapsed){
    //   return  setColapsed(true);
    // }else{
    //   setColapsed(false)
    // }
    // !colapsed ?setColapsed(true) :setColapsed(false) // мой вариант 1

   
  };



  return (
    <div>
      <button style={buttonStyle} onClick={()=>{setColapsed(!colapsed)}}>Жмякай</button>
      
      {colapsed ?
       <>
       <AcordionTitle title={"смотри какая красота"} /><AcordionBody />
       </>
       :<AcordionTitle title={props.titleValue}/>
      }
    </div>
  );
}

type AcordionTitleProps = {
  title: string;
};

export function AcordionTitle(props: AcordionTitleProps) {
  return (
    <div>
      <h3 className="AcordionTitle">{props.title}</h3>
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
