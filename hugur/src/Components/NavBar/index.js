import React, { useEffect, useState } from 'react';
import { AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const NavBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
        });
    }, []);

    const LoginButton = () => {
        if (user) {
            return  <IconButton component={ Link } to="/profile">
                        <PersonIcon sx={{ color:'#81B93E', mr:0.5 }}/>
                        <Typography variant="h5" sx={{ fontFamily:'dosis', mr:2 }}>{user.displayName}</Typography>
                    </IconButton>
        } else {
            return  <IconButton component={ Link } to="/login">
                        <PersonIcon sx={{ color:'#81B93E', mr:0.5 }}/>
                        <Typography variant="h5" sx={{ fontFamily:'dosis', mr:2 }}>Log In</Typography>
                    </IconButton>
            
            
        }
    }

    return(
        <AppBar position="static" elevation={0} sx={{ display:'flex', flexDirection:'row', backgroundColor:'#FCFCFC' }}>
            <IconButton component={Link} to="/">
                <Box
                    component="img" 
                    src="http://www.ru.is/media/HR_logo_hringur_transparent.png"
                    alt="RU logo"
                    maxHeight={96}
                ></Box>
            </IconButton>
            <Container maxWidth="xl" sx={{ display:'flex', flexDirection:'row-reverse' }}>
                <Toolbar sx={{ display:'flex', flexDirection:'row', color:'#000000' }}>
                    <LoginButton />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;