import React, { useState } from 'react';
import './Game.scss';
import MainMenu from './MainMenu'
import spoczynek_png from '../images/spoczynek.png';
import atak_png from '../images/atak.png';
import GameBar from './GameBar';

function Game() {

    const[currentGameWindow, setCurrentGameWindow]  = useState('Menu')
    const[mainGameAction,setMainGameImage] = useState(spoczynek_png);


    const doRypanie = (event) => {

         if(event.keyCode === 32 && event.type === "keydown"){
            setMainGameImage(atak_png);
         }else if(event.type === "keyup" && event.keyCode === 32) {
            setMainGameImage(spoczynek_png);
         }
    }

    const changeGameWindow = (windowToSet) => {
        setCurrentGameWindow(windowToSet);
    }
    document.addEventListener("keydown", doRypanie);
    document.addEventListener("keyup", doRypanie);


    if(currentGameWindow === "Game"){
        return (
            <div id={"main_game_window"}>
                <img alt='głowny ekran gry' src={mainGameAction} />
                <GameBar />
            </div>
        );
    }else{
        return (
            <MainMenu changeGameWindow={changeGameWindow} />
        );
    }

}

export default Game;
