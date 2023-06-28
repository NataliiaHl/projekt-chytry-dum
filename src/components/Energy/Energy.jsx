import React from "react";
import './style.css'
import electricityUrl from '../Dashboard/img/electricity.svg'
import waterUrl from '../Dashboard/img/water.svg'

export const Energy = ({ electricity, water }) => {
    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                <img src={electricityUrl}/>
                </div>
                <div className="energy__consumption">
                <div className="energy__description">Elektřina</div>
                <div className="energy__value">{electricity} kW</div>
                </div>
            </div>
            <div className="energy__source">
                <div className="energy__icon">
                <img src={waterUrl}/>
                </div>
                <div className="energy__consumption">
                <div className="energy__description">Voda</div>
                <div className="energy__value">{water} m<sup>3</sup></div>
                </div>
            </div>
        </div>

    )
}