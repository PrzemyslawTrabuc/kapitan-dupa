import React from 'react';
import './MainMenu.scss';
import kapitanDupaHead from '../images/Kapitan-dupa-head.png';

function MainMenu(props){

   const handleStartClick = () => {
       props.changeGameWindow("Game");
       props.StartGame();
    }

    return(
        <div id="MainMenu">
            <h1>Kapitan Dupa</h1>
            <div id="menu-items">
                <h2  onClick={handleStartClick}>START <img src={kapitanDupaHead} alt="menu pointer" /></h2>
                <h2>Highscores <img src={kapitanDupaHead} alt="menu pointer"/></h2> {/*TODO: add action to highs-core */}
            </div>
        </div>
    );
}

export default MainMenu;