import React, {useEffect, useState} from 'react';
import {getDocs, collection, doc, setDoc, addDoc, query, orderBy, limit} from 'firebase/firestore';
import db from "../firebase/firebase";
import '../Global.scss';
import './SaveScoreForm.scss'
import score from "./Score";

const SaveScoreForm = (props) => {

    const [nameValue, setNameValue] = useState(null);

    const Score = props.score;

    useEffect(() => {
        document.getElementById('Score').value = Score;
    }, [])


        const onSubmit = (event) => {
            event.preventDefault();
            console.log('Submit clicked')
            const date = new Date();
            props.onSubmit(nameValue,date);
        }

        const onNameChange = (event) => {
            setNameValue(event.target.value)
            console.log(nameValue);
        }


        return (
            <div className='form__score'>
                <form className="main__text--color" onSubmit={onSubmit}>
                    <label>
                        Enter your login, tough guy:
                    </label>
                    <input className='nickname__input' onChange={onNameChange} style={{height: '3vh'}}
                           value={nameValue}>

                    </input>
                    <label>
                        Score:
                    </label>
                    <input className="score__input" type='text' readOnly value={Score}>

                    </input>
                    <button id='FireButton' style={{border: 'none', height: '5vh', marginTop: '4vh'}}
                            onClick={onSubmit}>SUBMIT
                    </button>
                </form>
            </div>
        )
    }

    export default SaveScoreForm;