import React from 'react';
import './Score.scss'

function Score(props){

    return(
        <div id="Score">
            <h3>Score:</h3>
            <h3>{props.Score}</h3>
        </div>
    )
}

export default Score;