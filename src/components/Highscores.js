import React, {useEffect, useState} from 'react';
import db from '../firebase/firebase.js';
import {getDocs, collection, query, orderBy, addDoc, limit} from 'firebase/firestore';
import './Highscore.scss';

const Highscores = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        getPlayersFromFirestore()
    }, [])

    const getPlayersFromFirestore = async () => {
        let Players = []
        const q = query(collection(db, "test"), orderBy("Score", "desc"), limit(100));
        const response2 = await getDocs(q);
        response2.forEach((player) => {
            Players.push({...player.data(), "id": player.id})
        })
        setPlayers(Players)
    }

    const renderPlayersList = () => {
        let number = 1;
        const list = players.map((player) => (
            <React.Fragment key={player.id}>
                <tr style={{fontSize: 'calc(35% + 0.8vmin)', height: '.8rem'}}>
                    <td>{number++}</td>
                    <td>{player.Name}</td>
                    <td>{player.Score}</td>
                </tr>
            </React.Fragment>
        ));
        return list;
    }

    return (
        <div>
            <h1 className="modal__header">Highscores</h1>
            <div className="Highscore__modal">
            <table style={{width: '100%'}}>
                <tbody>
                <tr style={{textAlign: 'left', height: '3rem'}}>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                {renderPlayersList(players)}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Highscores