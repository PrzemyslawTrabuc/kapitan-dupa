import React from 'react';
import './KwiatyLotosu.scss'


function KwiatyLotosu(props){

    return(
        <div id="KwiatyLotosu">
        <h3>HIT</h3> <img  src={props.currentKwiatyLotosu} alt="abc" />
        </div>
    )
}

export default KwiatyLotosu;