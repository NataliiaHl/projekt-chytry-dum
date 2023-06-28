import React, { useState } from "react";
import './style.css' 
import blindsopenUrl from '../Dashboard/img/blinds-open.svg'
import blindsclosedUrl from '../Dashboard/img/blinds-closed.svg'

export const Blinds = ({ state }) => {
    const [blindsState, setBlindsState] = useState(state)
    const changeBlinds = () => {
        setBlindsState(blindsState === 'open' ? 'closed' : 'open')
    }
    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsState === 'open' ? blindsopenUrl : blindsclosedUrl}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={blindsState === 'open' ? "button button--active" : "button"} onClick={changeBlinds}>Otevřeno</button>
                <button className={blindsState === 'closed' ? "button button--active" : "button"} onClick={changeBlinds}>Zavřeno</button>
            </div>
        </div>
    )
}