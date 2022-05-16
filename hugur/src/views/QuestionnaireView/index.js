import React, { useState, useEffect } from 'react';
import Questionnaire from "../../Components/Questionnaire";
import { db } from '../../utils/firebase';
import { addDoc, collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';

const QuestionnaireView = () => {
    const [user, setUser] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [questions, setQuestions] = useState(null);
    const [currentQ, setCurrentQ] = useState(null);
    const [pssScore, setPssScore] = useState(0);
    const [phqScore, setPhqScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [init, setInit] = useState(false);
    const navigate = useNavigate();

    const findQuestion = (code, number) => {
        let result = questions.filter(function(obj) {
            return obj.qcode === code && obj.qno === number;
        });
        return result[0];
    }

    const updateState = () => {
        if (currentQ.qcode === "pss") {
            if (currentQ.qno < 10) {
                setCurrentQ(findQuestion(currentQ.qcode, currentQ.qno + 1));
            } else {
                setCurrentQ(findQuestion("phq", 1));
            }
        } else if (currentQ.qcode === "phq") {
            setCurrentQ(findQuestion(currentQ.qcode, currentQ.qno + 1));
            if (currentQ.qno === 9) {
                setFinished(true);
            } 
        }
    };

    const initState = () => {
        if (!init || questions) {
            setCurrentQ(() => {
                let result = questions.filter(function(obj) {
                    return obj.qcode === "pss" && obj.qno === 1;
                });
                return result[0];
            });
            setInit(true);
        }
    }

    useEffect(() => {
        const auth = getAuth();
        if(!auth.currentUser.isAnonymous) {
            setAnswered(true);
        }
        setUser(auth.currentUser);
        onSnapshot(collection(db, "questionnaire"), (snapshot) => {
            setQuestions(
                snapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
            )
        });
    }, []);

    useEffect(() => {
        if (questions) {
            initState();
        }
    }, [questions]);

    useEffect(() => {
        if(finished) {
            setDoc(doc(db, "answers", user.uid), {
                pss: pssScore,
                phq: phqScore,
            })
            navigate("/results", { replace: true });
        }
    }, [phqScore])

    const handleSubmit = (q, answer) => {
        console.log(q.qcode, q.qno , answer.i);
        if(q.qcode === "pss") {
            if([4,5,7,8].includes(q.qno)) {
                let newAnswers = [4,3,2,1,0]
                answer = newAnswers[answer.i];
            } else {
                answer = answer.i
            }
            setPssScore(pssScore+answer);
        } else if(q.qcode === "phq") {
            setPhqScore(phqScore+answer.i);
        }
        updateState();
    }

    const handleAnsweredClick = () => {
        setAnswered(false);
    }

    return(
        <Box>
            { answered ? (
                <Box>
                    <Typography variant="h4">You have already answered the questionnaires!</Typography>
                    <Button variant="contained" color="warning" onClick={handleAnsweredClick}>Answer again and Overwrite</Button>
                </Box>
            ) : (
                <Box>
                { currentQ ? (
                    <Questionnaire key={currentQ} q={currentQ} onButtonClick={handleSubmit} />
                ) : (
                    <TailSpin />
                )}  
            </Box>
            )}
        </Box>
    );
}

export default QuestionnaireView;