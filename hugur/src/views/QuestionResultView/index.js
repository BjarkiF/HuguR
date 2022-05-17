import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { TailSpin } from 'react-loader-spinner';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import QuestionResultComponent from '../../Components/QuestionResultComponent';

const QuestionResultView = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [qAnswers, setQAnswers] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
        });
    }, []);

    useEffect(() => {
        if (user) {
            const docRef = doc(db, "answers", user.uid);
            onSnapshot(docRef, (snapshot) => {
                setQAnswers(snapshot.data())
            });
        }
    }, [user])

    useEffect(() => {
        if (qAnswers) {
            setLoading(false);
        }
    }, [qAnswers])

    const PSSAnswerText = (score) => {
        const lowStr = "This score indicates that your stress levels are low. While HuguR is not a professional diagnostic tool we offer self-help tools and resources that can help you manage your stress levels. If you feel your stress levels increasing we recommend exploring the option of further help from professionals, for example the counselling services offered at RU.";
        const medStr = "This score indicates that you might be experiencing moderate stress levels. While HuguR is not a professional diagnostic tool it could be useful for you to seek further assistance from a professional, either through the counselling services offered at RU or through other licensed mental health professionals. Furthermore HuguR also offers self-help tools and resources that can help you manage your stress levels.";
        const highStr = "This score indicates that you might be experiencing higher than normal levels of stress. While HuguR is not a professional diagnostic tool we would strongly suggest that you seek further assistance from a professional, either through the counselling services offered at RU or through other licensed mental health professionals.";
        
        if (score.score < 14) {
            return (<Typography variant="body1">{lowStr}</Typography>)
        } else if (score.score < 27) {
            return (<Typography variant="body1">{medStr}</Typography>)
        } else {
            return (<Typography variant="body1">{highStr}</Typography>)
        }
    }

    const PHQAnswerText = (score) => {
        const noStr = "This score suggests you are not experiencing any depression symptoms at this time.";
        const lowStr = "This score suggests that you could be experiencing mild depression symptoms. While HuguR is not a professional diagnostic tool we offer self-help tools and resources that can help you manage your mood. We also recommend exploring the option of further help from professionals, for example the counselling services offered at RU.";
        const medStr = "This score suggests that you could be experiencing moderate depression symptoms. While HuguR is not a professional diagnostic tool it could be useful for you to seek further assistance from a professional, either through the counselling services offered at RU or through other licensed mental health professionals. Furthermore HuguR also offers self-help tools and resources that can help you manage your mood.";
        const highStr = "This score indicates that you might be experiencing moderately severe symptoms of depression. While HuguR is not a professional diagnostic tool we would strongly suggest that you seek further assistance from a professional, either through the counselling services offered at RU or through other licensed mental health professionals.";
        const vHighStr = "This score indicates that you might be experiencing severe symptoms of depression. While HuguR is not a professional diagnostic tool we would strongly suggest that you seek further assistance from a professional, either through the counselling services offered at RU or through other licensed mental health professionals.";
        
        if (score.score < 5) {
            return (<Typography variant="body1">{noStr}</Typography>)
        } else if (score.score < 10) {
            return (<Typography variant="body1">{lowStr}</Typography>)
        } else if (score.score < 15) {
            return (<Typography variant="body1">{medStr}</Typography>)
        } else if (score.score < 20) {
            return (<Typography variant="body1">{highStr}</Typography>)
        } else {
            return (<Typography variant="body1">{vHighStr}</Typography>)
        }
    }

    return (
        <Box>
            { isLoading ? (
                <TailSpin />
            ) : (
                <Box sx={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection:"column", width:"80%", margin:"auto"}}>
                    <Typography variant="h3">{user.displayName}, Here are your results:</Typography>
                    <Typography sx={{mt: 5}} variant="h4">Stress:</Typography>
                    <Typography variant="body1">In the Stress related questions, you scored {qAnswers.pss}/40.</Typography>
                    <PSSAnswerText score={qAnswers.pss} />
                    <Typography sx={{mt: 5}} variant="h4">Mood:</Typography>
                    <Typography variant="body1">In the Mood related questions, you scored {qAnswers.phq}/27.</Typography>
                    <PHQAnswerText score={qAnswers.phq} />
                    <Typography sx={{ mt:15, fontSize:"50%" }} variant="body1">Attention: HuguR is NOT a professional diagnostic tool for mental health problems. This is only a self-assessment tool that can suggest simple steps to help support student's mental wellbeing based on questionnaires that can shed light on perceived stress and depression symptoms. Any answers are NOT diagnosing you with any illnesses, and we strongly suggest that you seek help from professionals if the results above are moderate to severe.</Typography>
                </Box>
            )}
        </Box>
    )  
};

export default QuestionResultView;