import React from 'react';
import './GameBar.scss'
import KwiatyLotosu from './KwiatyLotosu'
import FireButton from './FireButton.jsx'
import Score from './Score'


function GameBar(props) {
    return (<div className="GameBar">
        <div><Score Score={props.Score}/></div>
        <div style={{minWidth: "53%"}}>
            <KwiatyLotosu currentKwiatyLotosu={props.currentKwiatyLotosu}
                          handleSpaceBarClick={props.handleSpaceBarClick}
            />
        </div>
        <div><FireButton handleClickFireButton={props.handleClickFireButton}/></div>
    </div>)
}

export default GameBar;
