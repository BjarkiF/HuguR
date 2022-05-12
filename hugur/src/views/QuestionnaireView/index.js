import React, { useState, useEffect } from 'react';
import Questionnaire from "../../Components/Questionnaire";
import { db } from '../../utils/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const QuestionnaireView = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, "questionnaire"), (snapshot) => {
            setQuestions(
                snapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
            )
        })
    }, []);

    const qlist = questions.map(q => (
        <Questionnaire q={q} />
    ));


    return(
        qlist
    );
}

export default QuestionnaireView;