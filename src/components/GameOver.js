import React from 'react';
import './GameOver.scss';
import introSound from '../sounds/intro.mp3';
import miernyWynikSound from '../sounds/mierny-wynik.mp3';
import kapitanDupaHead from "../images/Kapitan-dupa-head.png";

function GameOver({Score, restartGame, playAudio}){

    playAudio(miernyWynikSound);

    function handleRestartClick(){
        restartGame();
        playAudio(introSound)
    }

    return(
        <div id="game-over-score">
            <p>Score: </p>
            <p>{Score}</p>
            <div id="Restart" onClick={handleRestartClick}>Restart <img src={kapitanDupaHead} alt="menu pointer"/></div>
        </div>
    )
}
export default GameOver;