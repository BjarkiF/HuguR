import React, { useState, useEffect } from 'react';
import Questionnaire from "../../Components/Questionnaire";
import { db } from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

const QuestionnaireView = () => {
    const [questions, setQuestions] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!status) {
            fetchQuestions();
            updateStatus(true);
        }
    });

    const fetchQuestions = async () => {
        const response = await getDocs(collection(db, "questionnaire"));

        response.forEach((item)=>{
            console.log(item);
            setQuestions([...questions, item.data()]);
        });
    };

    const updateStatus = (bool) => {
        setStatus(bool);
    }

    const qlist = questions.map(q => (
        <Questionnaire q={q} />
    ));


    return(
        qlist
    );
}

export default QuestionnaireView;