import {action} from '@storybook/addon-actions';
import {Button} from "./Button"; // ---------     для информации вывода в консоль сторибука







export default {
    title: "Покажи",// синтаксис  для реакта  импорт компоненты
    component: Button,
}



export const DemoStory = () => {


    return <Button name={'StoryBook'}/>
}

