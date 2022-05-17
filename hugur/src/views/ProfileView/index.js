import { Typography, Button, Avatar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ProfileView = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
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
                setLoading(false);
            });
        }
    }, [user])

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
                    <Button variant="contained" color="error" onClick={onButton}>Sign Out</Button>
                </Box>
            )}
        </Box>
    )  
};

export default ProfileView;