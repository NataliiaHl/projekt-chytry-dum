import React, {useState} from "react";
import './style.css'
import lightoffUrl from '../../Dashboard/img/light-off.svg'
import lightonUrl from '../../Dashboard/img/light-on.svg'


export const Light = ({name, state }) => {
    const [ lightState, setLightState] = useState(state)
    const change = () => {
        setLightState(lightState === 'on' ? 'off' : 'on')
    }

    return (
        <div className="light" onClick={change}>
            <div className="light__icon">
                <img src={lightState === 'on' ? lightonUrl : lightoffUrl} />
            </div>
            <div className="light__name">
             {name}
            </div>
        </div>
    )
}