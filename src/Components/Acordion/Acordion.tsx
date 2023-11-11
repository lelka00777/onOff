import {useState} from "react";

type PropsType = {
    titleValue: string;


};
//-------------------------------------------- Родительская компонента ---------------------------------------------
export function Acordion(props: PropsType) {
//               ----------------------------- Стейт для для изменения состояния ----------------------
    const [colapsed, setColapset] = useState<boolean>(false)


    return (
        <div>
            <AcordionTitle title={props.titleValue} setColapset={() => setColapset(!colapsed)} colapsed={colapsed}/>
            {/*Если  тру то показываем компоненту <AcordionBody/>*/}
            {colapsed && <AcordionBody/>}
        </div>
    );
}

//-------------------------------------------------------------------------------------------------------------------
type AcordionTitleProps = {
    title: string;
    colapsed: boolean
    setColapset: () => void

};

// Компонента .......
export function AcordionTitle(props: AcordionTitleProps) {
    // const onClickHandler = () => {
    //     props.setColapset()
    // }


    return (
        <div>
            <h3 onClick={props.setColapset}>{props.title}</h3>
        </div>
    );
}

//------------------------------------------------------------------------------------------------------------------
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

//---------------------------------------------------------------------------------------------------------------------