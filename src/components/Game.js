import React, { useState, useEffect } from 'react';
import './Game.scss';
import MainMenu from './MainMenu'
import spoczynek_png from '../images/spoczynek.png';
import atak_png from '../images/atak.png';
import GameBar from './GameBar';

function Game() {

    const[currentGameWindow, setCurrentGameWindow]  = useState('Menu')
    const[mainGameAction,setMainGameImage] = useState(spoczynek_png);
    const[Score,setScore] = useState(0);
    const[isPressed,setIsPressed] = useState(false)

    const doRypanie = (event) => {
         if(event.keyCode === 32 && event.type === "keydown"){
             if(isPressed === false) {
                 setIsPressed(true);
                 setMainGameImage(atak_png);
                 GainScore();
             }
             document.removeEventListener("keydown", doRypanie);
         }else if(event.type === "keyup" && event.keyCode === 32) {
             setMainGameImage(spoczynek_png);
             setIsPressed(false);
         }
    }

    useEffect(()=>{
        document.addEventListener("keydown", doRypanie);
        document.addEventListener("keyup", doRypanie);
    })

    const handleClickFireButton = (event) =>{
        if(event.type === "mousedown"){
            setMainGameImage(atak_png);
            GainScore();
        }else if(event.type === "mouseup") {
            setMainGameImage(spoczynek_png);
           // setIsPressed(false);
        }
    }

    const GainScore = () =>{
            console.log("a")
            setScore(Score + 100);
    }

    const changeGameWindow = (windowToSet) => {
        setCurrentGameWindow(windowToSet);
    }


    if(currentGameWindow === "Game"){
        return (
            <div id={"main_game_window"}>
                <img alt='głowny ekran gry' src={mainGameAction} />
                <GameBar handleClickFireButton={handleClickFireButton} Score={Score} />
            </div>
        );
    }else{
        return (
            <MainMenu changeGameWindow={changeGameWindow} />
        );
    }

}

export default Game;
