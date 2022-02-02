import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css'
import {Settings} from "./components/Settings/Settings";
import {Count} from "./components/Count/Count";


function App() {
    let [count, setCount] = useState<number | string>(0)
    let [maxValue, setMaxValue] = useState<number>(1)
    let [minValue, setMinValue] = useState<number>(0)
    let [disableButton, setDisableButton] = useState<boolean>(false)

    const incrementCount = () => {
        count < maxValue && typeof (count) === 'number' && setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(minValue)
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        setDisableButton(true)
        setCount('press set')
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.valueAsNumber)
        setDisableButton(true)
        setCount('press set')
    }

    const onChange = () => {
        setDisableButton(false)
        setMinValue(minValue)
        setCount(minValue)
        setMaxValue(maxValue)
    }
    useEffect(() => {
        maxValue <= minValue && setCount('incorrect value')
    })


    return (
        <div className={s.App}>
            <Settings count={count}
                maxValue={maxValue}
                      minValue={minValue}
                      changeMaxValue={changeMaxValue}
                      changeMinValue={changeMinValue}
                      onChange={onChange}
            />
            <Count minValue={minValue}
                   count={count}
                   maxValue={maxValue}
                   disableButton={disableButton}
                   incrementCount={incrementCount}
                   decrementCount={decrementCount}/>
        </div>
    );
}

export default App;
