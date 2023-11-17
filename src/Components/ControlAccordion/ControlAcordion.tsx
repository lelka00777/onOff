import {useState} from "react";

type PropsType = {
    titleValue: string;
    colapsed: boolean;
    onClickhandel?: () => void
};

export function ControlAcordion(props: PropsType) {
    const [colapsed, setColapsed] = useState(false);

    const buttonStyle = {
        backgroundColor: 'blue', color: 'white',
        padding: '2px',
    }

    return (
        <div>
            <button style={buttonStyle} onClick={() => props.onClickhandel}>Жмякай</button>

            {props.colapsed ?
                <>
                    <AcordionTitle title={"смотри какая красота"}/><AcordionBody/>
                </>
                : <AcordionTitle title={props.titleValue}/>
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
