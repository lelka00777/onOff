import {useState} from "react";

type PropsType = {
    // on?:boolean
    // setOn:()=>void
}


export const OnOf = (props: PropsType) => {


    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',

        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'


    }
    const ofStyle = {
        width: '30px',
        height: '20px',

        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '15px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {

        setOn(true)


    }
    const ofClicked = () => {

        setOn(false)


    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={ofStyle} onClick={ofClicked}>Of</div>
            <div style={indicatorStyle}></div>
            {on.toString()}
        </div>
    );
};
