import React, {useEffect} from 'react';
import {getDocs, collection, doc, setDoc, addDoc, query, orderBy, limit} from 'firebase/firestore';
import db from "../firebase/firebase";

const SaveScoreForm = () =>{

    useEffect(() =>{
        getHighestFromFirestore();
    },[])

    const getHighestFromFirestore = async () => {
        let highestScore = 0;
        const q = query(collection(db, "test"), orderBy("Score", "desc"), limit(1));
        const response = await getDocs(q);
        response.forEach((score)=>{
            highestScore = score.data().Score;
        })
        console.log(highestScore);
        return highestScore;
    }

    return(
        <div>
            <form>
                <label>
                        DUPA
                </label>
                <input>

                </input>
            </form>
        </div>
    )
}

export default SaveScoreForm;