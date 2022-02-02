import {Input} from "./Input";
import {SettingsButton} from "./SettingsButton";
import s from './Settings.module.css'
import {ChangeEvent} from "react";

type SettingsPropsType = {
    changeMinValue:(e:ChangeEvent<HTMLInputElement>) => void
    changeMaxValue:(e:ChangeEvent<HTMLInputElement>) => void
    onChange:() => void
    minValue:number
    maxValue:number
    count:number | string

}

export const Settings = (props:SettingsPropsType) => {
    const { changeMinValue,  changeMaxValue, minValue, maxValue} = props
    return(
        <div className={s.Settings}>
            <div className={s.inputs}>
                <Input name={'Max value:'} changeValue={changeMaxValue} value={maxValue} count={props.count}/>
                <Input name={'Min value:'} changeValue={changeMinValue} value={minValue} count={props.count}/>
            </div>
           <div className={s.SettingBtn}>
               <SettingsButton onChange={props.onChange} minValue={minValue} maxValue={maxValue}/>
           </div>
        </div>
    )
}