import React from "react";
import s from './Count.module.css'

type DisplayPropsType = {
    count:number | string
    maxValue:number
    disableButton:boolean
    values:number
}

export const Display = (props:DisplayPropsType) => {
    return(
        <div className={ props.count === 'incorrect value' || props.count === 'press set' || props.values === props.count ? s.redDisplay : s.Display}>
           <p>{props.count}</p>
        </div>
    )
}