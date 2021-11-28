import React, { useState } from 'react';
import './Game.scss';
import spoczynek_png from '../images/spoczynek.png';
import atak_png from '../images/atak.png';

function Game() {


    const[mainGameAction,setMainGameImage] = useState(spoczynek_png);


const doRypanie = (event) => {

    if(event.keyCode === 32 && event.type === "keydown"){
        setMainGameImage(atak_png);
    }else if(event.type === "keyup" && event.keyCode === 32) {
        setMainGameImage(spoczynek_png);
    }

}
    document.addEventListener("keydown", doRypanie);
    document.addEventListener("keyup", doRypanie);

  return (
      <div id={"main_game_window"}>
        <img alt='głowny ekran gry' src={mainGameAction} />
      </div>
  );
}

export default Game;
