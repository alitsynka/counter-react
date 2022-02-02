import s from './Settings.module.css'
import {ChangeEvent} from "react";

type InputPropsType = {
    name:string
    changeValue:(e:ChangeEvent<HTMLInputElement>) => void
    value:number
    count:number | string
}

export const Input = (props:InputPropsType) => {
    return (
        <div className={s.inputWrapper}>
            <div className={s.inputName}>
                {props.name}
            </div>
            <div>
                <input value={props.value}
                    type={'number'}
                       className={ s.input}
                       onChange={props.changeValue}/>
            </div>
        </div>
    )
}