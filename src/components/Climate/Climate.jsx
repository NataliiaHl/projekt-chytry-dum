import React, {useState} from "react";
import './style.css';
import tempUrl from '../Dashboard/img/temp.svg'

export const Climate = ({temperature, humidity}) => {
    const [ temperatureChange, setTemperatureChange] = useState(temperature)
    return (
        <div className="climate">
            <div className="climate__icon">
                <img className={tempUrl} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperatureChange}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={() => {setTemperatureChange(temperatureChange + 1)}}>+</button>
                <button className="button"  onClick={() => {setTemperatureChange(temperatureChange - 1)}}>-</button>
            </div>
        </div>
    )
}