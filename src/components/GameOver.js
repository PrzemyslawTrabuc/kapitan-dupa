import React, {useEffect, useState} from 'react';
import './GameOver.scss';
import introSound from '../sounds/intro.mp3';
import miernyWynikSound from '../sounds/mierny-wynik.mp3';
import kapitanDupaHead from "../images/Kapitan-dupa-head.png";
import Modal from "./Modal";
import SaveScoreForm from './SaveScoreForm'
import {getDocs, collection, doc, setDoc, addDoc, query, orderBy, limit} from 'firebase/firestore';
import db from "../firebase/firebase";

function GameOver({Score, restartGame, playAudio}) {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [topScore, setTopScore] = useState(0)

    useEffect(() => {
        playAudio(miernyWynikSound);
        getHighestFromFirestore();
    }, [])

    function handleRestartClick() {
        restartGame();
        playAudio(introSound)
    }

    const getHighestFromFirestore = async () => {
        let topScore = 0;
        const q = query(collection(db, "test"), orderBy("Score", "desc"), limit(1));
        const response = await getDocs(q);
        response.forEach((score) => {
            topScore = score.data().Score;
        })
        setTopScore(topScore);
        setModalVisibility(true);
    }

    const uploadPlayerHighscore = async (name,date) => {
        console.log('uploading...')
        //const response = await setDoc(doc(db, "test", 'dupa'), {
        if (topScore < Score) {
            const response = await addDoc(collection(db, "test"), {
                Name: name,
                Score: Score,
                Date: date
            })
            console.log('uploaded');
        }
        console.log('score is not saved')
    }

    const renderModal = () => {
        if (modalVisibility && Score < topScore) {
            return (
                <Modal onDismiss={onDismiss} content={<SaveScoreForm score={Score} getTopScore={getHighestFromFirestore} topScore={topScore} onSubmit={uploadPlayerHighscore}/>}></Modal>
            )
        } else
            return null
    }

    const onDismiss = () => {
        setModalVisibility(false)
        restartGame();
    }

    return (
        <div id="game-over-score">
            <p>Score: </p>
            <p>{Score}</p>
            <div id="Restart" onClick={handleRestartClick}>Restart <img src={kapitanDupaHead} alt="menu pointer"/></div>
            {renderModal()}
        </div>
    )
}

export default GameOver;