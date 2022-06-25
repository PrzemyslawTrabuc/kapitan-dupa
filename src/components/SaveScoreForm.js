import React, {useEffect} from 'react';
import {getDocs, collection, doc, setDoc, addDoc, query, orderBy, limit} from 'firebase/firestore';
import db from "../firebase/firebase";
import '../Global.scss';
import './SaveScoreForm.scss'

const SaveScoreForm = (props) => {

    const Score = props.score;

    useEffect(() => {
        document.getElementById('Score').value = Score;
    },[])

    return (
        <div className='form__score'>
            <form className="main__text--color">
                <label>
                    Nickname
                </label>
                <input className='nickname__input'>

                </input>
                <label>
                    Score:
                </label>
                <input className="score__input" type='text' readOnly value={Score}>

                </input>
            </form>
        </div>
    )
}

export default SaveScoreForm;