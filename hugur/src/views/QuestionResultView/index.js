import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { TailSpin } from 'react-loader-spinner';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

const QuestionResultView = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [qData, setQData] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [])

    useEffect(() => {
        if (user) {
            const dbRef = doc(db, "answers", user.uid);
            onSnapshot(dbRef, (snapshot) => {
                setQData(snapshot.data())
            });
        }
    }, [user])

    useEffect(() => {
        setLoading(false);
    }, [qData])

    return(
        <Box>
            { loading ? (
                <Box>
                    <TailSpin />
                </Box>
            ) : (
                <Box>
                    <Typography variant="h4">Your Results:</Typography>
                    <Typography variant="body1">In the Stress related questions, your total was {qData.pss}/40 </Typography>

                    <Typography variant="body1">In the Depression related questions, your total was {qData.phq}/27 </Typography>
            </Box>
            )}
        </Box>
    );
}

export default QuestionResultView;