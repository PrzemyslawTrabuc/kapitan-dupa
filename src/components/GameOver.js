import React from 'react';
import './GameOver.scss';

function GameOver({Score, restartGame}){

    function handleRestartClick(){
        restartGame();
    }

    return(
        <div id="game-over-score">
            <p>Score: </p>
            <p>{Score}</p>
            <div id="Restart" onClick={handleRestartClick}>Restart</div>
        </div>
    )
}
export default GameOver;