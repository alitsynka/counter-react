import s from './Count.module.css'
type CountPropsType = {
    value:string
    changeCount:() => void
    values:number
    count:number | string
    disableButton:boolean
}

export const CountButton = (props:CountPropsType) => {
    return(
        <div >
            <button className={s.btn}
                    disabled={props.disableButton || props.values === props.count}
                    onClick={props.changeCount}
            >{props.value}</button>
        </div>
    )
}