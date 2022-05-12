import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const ProfileView = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                setLoading(false);
            }
        });
    }, []);

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
                <Box>
                    <Typography variant="h3">Profile</Typography>
                    <Typography variant="body1">Email: {user.email}</Typography>
                    <Typography variant="body1">Name: {user.displayName}</Typography>
                    <Button variant="contained" color="error" onClick={onButton}>Sign Out</Button>
                </Box>
            )}
        </Box>
    )  
};

export default ProfileView;