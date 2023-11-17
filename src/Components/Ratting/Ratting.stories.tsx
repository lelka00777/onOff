import {action} from '@storybook/addon-actions'; // ---------     для информации вывода в консоль сторибука


import {RatingType, Ratting1,} from "./Ratting1";

import * as React from "react";
import {useState} from "react";



export default {
    title: "Raiting stories",// синтаксис  для реакта  импорт компоненты
    component: Ratting1,
}


export const EmptyStars = () => <Ratting1 value={0} onClick ={x => x}/>;
export const Rating1 = () => <Ratting1 value={1} onClick={x => x}/>;
export const Rating2 = () => <Ratting1 value={2} onClick={x => x}/>;
export const Rating3 = () => <Ratting1 value={3} onClick={x => x}/>;
export const Rating4 = () => <Ratting1 value={4} onClick={x => x}/>;
export const Rating5 = () => <Ratting1 value={5} onClick={x => x}/>;

export const ChangeRatting1 = () => {

    const [value, setValue] = useState<RatingType>(0)

    return <Ratting1 value={value} onClick={setValue} />
}

