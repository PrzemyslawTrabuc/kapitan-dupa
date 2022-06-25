import React, {useEffect, useState} from 'react';
import './GameOver.scss';
import introSound from '../sounds/intro.mp3';
import miernyWynikSound from '../sounds/mierny-wynik.mp3';
import kapitanDupaHead from "../images/Kapitan-dupa-head.png";
import Modal from "./Modal";
import SaveScoreForm from './SaveScoreForm'

function GameOver({Score, restartGame, playAudio}){
    const [modalVisibility, setModalVisibility] = useState(true)

    useEffect(() =>{
        playAudio(miernyWynikSound);
    },[])

    function handleRestartClick(){
        restartGame();
        playAudio(introSound)
    }

    const renderModal = () => {
        console.log(Score)
        if(modalVisibility){
            console.log("dupa")
            return(
                <Modal onDismiss={onDismiss} content={<SaveScoreForm />}></Modal>
            )
        }else{
            return null
        }
    }

    const onDismiss = () =>{
        setModalVisibility(false)
    }

    return(
        <div id="game-over-score">
            <p>Score: </p>
            <p>{Score}</p>
            <div id="Restart" onClick={handleRestartClick}>Restart <img src={kapitanDupaHead} alt="menu pointer"/></div>
            {renderModal()}
        </div>
    )
}
export default GameOver;