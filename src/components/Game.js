import React, { useState, useEffect } from 'react';
import './Game.scss';
import MainMenu from './MainMenu'
import spoczynek_png from '../images/spoczynek.png';
import atak_png from '../images/atak.png';
import kwiatyLotosu0 from '../images/kwiatyLotosu0.png'
import kwiatyLotosu1 from '../images/kwiatyLotosu1.png'
import kwiatyLotosu2 from '../images/kwiatyLotosu2.png'
import kwiatyLotosu3 from '../images/kwiatyLotosu3.png'
import kwiatyLotosu4 from '../images/kwiatyLotosu4.png'
import kwiatyLotosu5 from '../images/kwiatyLotosu5.png'
import kwiatyLotosu6 from '../images/kwiatyLotosu6.png'
import GameBar from './GameBar';

function Game() {
    var kwiatyLotosu = [kwiatyLotosu0,kwiatyLotosu1,kwiatyLotosu2,kwiatyLotosu3,kwiatyLotosu4,kwiatyLotosu5,kwiatyLotosu6];
    const[currentGameWindow, setCurrentGameWindow]  = useState('Menu')
    const[mainGameImage,setMainGameImage] = useState(spoczynek_png);
    const[Score,setScore] = useState(0);
    const[currentKwiatyLotosu,setCurrentKwiatyLotosu]= useState(0);
    const[isPressed,setIsPressed]=useState(false);
    const[isGameActive,setIsGameActive]=useState(true);

    const StartGame = () =>{
        var timeleft = 10;
        const myInterval = timeleft/6;
        const Timer = () => {
            timeleft = timeleft - myInterval;
            if (timeleft <= 0) {
                clearInterval(interv);
                setCurrentKwiatyLotosu(6);
                setIsGameActive(false);
            }else{
                switch(true){
                    case timeleft >= 5*myInterval:
                        setCurrentKwiatyLotosu(1);
                        break;
                    case timeleft >= 3.99*myInterval:
                        setCurrentKwiatyLotosu(2);
                        break;
                    case timeleft >= 3*myInterval:
                        setCurrentKwiatyLotosu(3);
                        break;
                    case timeleft >= 1.99*myInterval:
                        setCurrentKwiatyLotosu(4);
                        break;
                    case timeleft >= 0.99*myInterval:
                        setCurrentKwiatyLotosu(5);
                        break;
                    case timeleft >= 0:
                        setCurrentKwiatyLotosu(6);
                        setIsGameActive(false);
                        break;
                }
            }
        }
        var interv = setInterval(Timer, myInterval*1000);

    }

    const handleSpaceBarClick = (event) => {
        if(event.keyCode === 32 && event.type === "keydown" && isGameActive===true){
            if(isPressed===false) {
                document.addEventListener("keyup", handleSpaceBarClick)
                setIsPressed(true);
                setScore(Score + 100);
                setMainGameImage(atak_png);
            }
        }else if(event.type === "keyup" && event.keyCode === 32 && isGameActive===true) {
            setIsPressed(false);
            setMainGameImage(spoczynek_png);
            document.removeEventListener("keyup", handleSpaceBarClick)
        }
    }

    useEffect(()=> {
        document.addEventListener("keydown", handleSpaceBarClick);
        return () => document.removeEventListener("keydown", handleSpaceBarClick);
    })

    const handleClickFireButton = (event) =>{
        if(event.type === "mousedown" && isGameActive===true){
            setMainGameImage(atak_png);
            setScore(Score + 100);
        }else if(event.type === "mouseup" && isGameActive===true) {
            setMainGameImage(spoczynek_png);
        }
    }

    const changeGameWindow = (windowToSet) => {
        setCurrentGameWindow(windowToSet);
    }

    if(currentGameWindow === "Game"){
        return (
            <div id={"main_game_window"}>
                <img alt='głowny ekran gry' src={mainGameImage} />
                <GameBar handleClickFireButton={handleClickFireButton} Score={Score} currentKwiatyLotosu={kwiatyLotosu[currentKwiatyLotosu]} handleSpaceBarClick={handleSpaceBarClick}/>
            </div>
        );
    }else{
        return (
            <MainMenu changeGameWindow={changeGameWindow} StartGame={StartGame} />
        );
    }

}

export default Game;
