import {Display} from "./Display";
import {CountButton} from "./CountButton";
import s from './Count.module.css'

type CountPropsType = {
    decrementCount:() => void
    incrementCount:() => void
    minValue:number
    maxValue:number
    count:number | string
    disableButton:boolean
}

export const Count = (props:CountPropsType) => {


    return(
        <div className={s.Count}>
            <Display count={props.count} values={props.maxValue} maxValue={props.maxValue} disableButton={props.disableButton}/>
            <div className={s.CountBtns}>
                <CountButton value={'Inc'}
                             changeCount={props.incrementCount} values={props.maxValue} count={props.count} disableButton={props.disableButton}/>
                <CountButton value={'Reset'}
                             changeCount={props.decrementCount} values={props.minValue} count={props.count} disableButton={props.disableButton}/>
            </div>
        </div>
    )
}