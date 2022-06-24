import React, {useEffect, useState} from 'react';
import db from '../firebase/firebase.js';
import {getDocs, collection, doc, setDoc, addDoc, query, orderBy, limit} from 'firebase/firestore';
import './Highscore.scss';

const Highscores = (props) => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        getPlayersFromFirestore()
    }, [])

    const getPlayersFromFirestore = async () => {
        let Players = []
        const q = query(collection(db, "test"), orderBy("Score", "desc"));
        const response2 = await getDocs(q);
        response2.forEach((player) => {
            Players.push({...player.data(), "id": player.id})
        })
        setPlayers(Players)
    }

    const renderPlayersList = () => {
        const list = players.map((player) => (
            <React.Fragment key={player.id}>
                <tr style={{fontSize: 'calc(35% + 0.8vmin)', height: '.8rem'}}>
                    <td>{player.Name}</td>
                    <td>{player.Score}</td>
                </tr>
            </React.Fragment> asd
        ));
        return list;
    }

    return (
        <div>
            <h1>Highscores</h1>
            <table style={{width: '100%'}}>
                <tbody>
                <tr style={{textAlign: 'left', height: '3rem'}}>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                {renderPlayersList(players)}
                </tbody>
            </table>

        </div>
    )
}

export default Highscores