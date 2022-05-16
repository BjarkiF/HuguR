import { Typography, Button, Grid, Avatar, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { onSnapshot, collection, query, where, getDocs, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ProfileView = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [qAnswers, setQAnswers] = useState(null);
    const navigate = useNavigate();

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

    const onButton = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                navigate("/", { replace: true });
            })
    }

    return (
        <Box>
            { isLoading ? (
                <TailSpin />
            ) : (
                <Box sx={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection:"column" }}>
                    <Typography variant="h4">Profile</Typography> 
                    <Avatar sx={{ width: 64, height: 64, bgcolor: "green" }}>{user.displayName[0]}</Avatar>
                    <Typography variant="body1">{user.displayName}</Typography>
                    <Typography variant="body1">{user.email}</Typography>
                    <Typography variant="h5">Questionnaire Results:</Typography>
                    <Typography variant="body1">PSS Score: {qAnswers.pss}</Typography>
                    <Typography variant="body1">PHQ Score: {qAnswers.phq}</Typography>
                    <Button variant="contained" color="error" onClick={onButton}>Sign Out</Button>
                </Box>
            )}
        </Box>
    )  
};

export default ProfileView;