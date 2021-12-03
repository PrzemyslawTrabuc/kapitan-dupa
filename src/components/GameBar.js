import React from 'react';
import './GameBar.scss'
import KwiatyLotosu from './KwiatyLotosu'

function GameBar(){

    return(
        <div className="GameBar">
        <div style={{backgroundColor: 'red'}}></div>
        <div style={{ minWidth: "50%"}}><KwiatyLotosu /></div>
        <div style={{backgroundColor: 'blue'}}></div>
        </div>
    )
}

export default GameBar;
