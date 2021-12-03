import React from 'react';
import './MainMenu.scss';


function MainMenu(props){

   const handleStartClick = () => {
       props.changeGameWindow("Game");
       props.StartGame();
    }


    return(
        <div id="MainMenu">
            <h1>Kapitan Dupa</h1>
            <h2 id="START-Button" onClick={handleStartClick}>START</h2>
        </div>
    );
}

export default MainMenu;