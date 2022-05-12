import React, { useState } from 'react';
import { Grid, Button, Typography, TextField, Box } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const validatePassword = ()  => {
        let isValid = false;
        if(email !== '' && name !== '' && password !== '' && passConfirm !== '') {
            if (password === passConfirm) {
                isValid = true;
            } else {
                setError("Passwords do not match.")
            }
        } else {
            setError("Please fill in all fields")
        }
        return isValid;
    }

    const register = (e) =>  {
        e.preventDefault();
        const auth = getAuth();
        if(validatePassword()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async () => {
                    await updateProfile(auth.currentUser, {
                        displayName: name,
                    }).then(() => {
                        navigate("/", { replace: true })
                    })
                })  
        }
    }

    return (
        <Grid sx={{ maxWidth:"66%" }}>
        <Typography variant="h3">Sign Up</Typography>
        { error && <Typography variant="body1" sx={{ color: "red" }}>{error}</Typography>}
        <Box component="form" noValidate autoComplete="off" onSubmit={register}>
            <TextField label="Email" placeholder='Enter Email' fullWidth required onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" placeholder='Enter Password' type="password" fullWidth required onChange={(e) => setPassword(e.target.value)}/>
            <TextField label="Confirm Password" placeholder='Confirm Password' type="password" fullWidth required onChange={(e) => setPassConfirm(e.target.value)}/>
            <TextField label="Name" placeholder="Name" fullWidth required onChange={(e) => setName(e.target.value)}/>
            <Button type='submit' variant="contained" fullWidth>Sign Up</Button>
        </Box>
        </Grid>
    )
};

export default RegisterComponent;