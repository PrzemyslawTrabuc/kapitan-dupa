import React from 'react';
import './MainMenu.scss';

function MainMenu(props,changeGameWindow){

   const handleStartClick = () => {
        props.changeGameWindow("Game");
    }

    return(
        <div id="MainMenu">
            <h1>Kapitan Dupa</h1>
            <h2 id="START-Button" onClick={handleStartClick}>START</h2>
        </div>
    );
}

export default MainMenu;