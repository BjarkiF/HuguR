import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (e) =>  {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/", { replace: true });
            })
        }

    return (
        <Grid sx={{ maxWidth:"66%" }}>
            <Typography variant="h3">Sign In</Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={login}>
                <TextField label="Email" placeholder='Enter Email' fullWidth required onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" placeholder='Enter Password' type="password" fullWidth required onChange={(e) => setPassword(e.target.value)}/>
                <Button type='submit' variant="contained" fullWidth>Sign In</Button>
            </Box>
            <Typography variant="body1">
                <Link to="#">
                Forgot Password?
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/register">
                Don't have an account? Sign up.
                </Link>
            </Typography>
        </Grid>
    )
}

export default LoginComponent;