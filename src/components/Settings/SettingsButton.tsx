import React from "react";
import s from './Settings.module.css'

type SettingsPropsType = {
    onChange:() => void
    maxValue:number
    minValue:number
}

export const SettingsButton = (props:SettingsPropsType) => {
    return(
        <div >
            <button className={s.btn} onClick={props.onChange} disabled={props.maxValue <= props.minValue}>Set</button>
        </div>
    )
}