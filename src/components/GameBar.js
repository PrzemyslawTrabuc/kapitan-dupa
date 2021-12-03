import React from 'react';
import './GameBar.scss'

function GameBar(){

    return(
        <div className="GameBar">
        <div style={{backgroundColor: 'red'}}></div>
        <div style={{backgroundColor: 'green', minWidth: "50%"}}></div>
        <div style={{backgroundColor: 'blue'}}></div>
        </div>
    )
}

export default GameBar;
