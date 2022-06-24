import React, {useState} from 'react';
import './MainMenu.scss';
import kapitanDupaHead from '../images/Kapitan-dupa-head.png';
import Modal from './Modal';
import Highscores from './Highscores';

function MainMenu(props) {

    const [modalVisibility, setModalVisibility] = useState(false)

    const handleStartClick = () => {
        props.changeGameWindow("Game");
        props.StartGame();
    }

    const handleHighscoresClick = () => {
        setModalVisibility(!modalVisibility)
    }

    const renderModal = () => {
        if(modalVisibility){
            console.log("dupa")
            return(
                <Modal onDismiss={onDismiss} content={<Highscores />}></Modal>
            )
        }else{
            return null
        }
    }

    const onDismiss = () =>{
        setModalVisibility(false)
    }

    return (
        <div id="MainMenu">
            <h1>Kapitan Dupa</h1>
            <div id="menu-items">
                <h2 onClick={handleStartClick}>START <img src={kapitanDupaHead} alt="menu pointer"/></h2>
                <h2 onClick={handleHighscoresClick}>Highscores <img src={kapitanDupaHead} alt="menu pointer"/>
                </h2> {/*TODO: add action to highs-core */}
                {renderModal()}
            </div>
        </div>
    );
}

export default MainMenu;