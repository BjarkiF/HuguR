import React from 'react';
import { AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(country) {
        switch(country) {
            case 0:
                console.log("English!")
                break
            default:
                console.log("Íslenska!")
        }
    }
    render() {
        return(
            <AppBar position="static" sx={{ display:'flex', flexDirection:'row', backgroundColor:'#FCFCFC' }}>
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
                        <Typography variant="h6" sx={{ mr:1 }}>IS</Typography>
                        <Typography variant="h6" sx={{ mr:5 }}>EN</Typography>
                        <PersonIcon />
                        <Typography variant="h5" sx={{ mr:2 }}>Log In</Typography>
                        <PersonAddIcon sx={{ mr:0.5 }}/>
                        <Typography variant="h5">Register</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
}

export default NavBar;

/*
<Box component="div" sx={{ mr:2, display: { xs: 'flex' }, maxWidth: 32}}>
                            <Link to="/" className="navLogo">
                                <img src="http://www.ru.is/media/HR_logo_hringur_transparent.png" alt="logo" className="navLogo" />
                            </Link>
                        </Box>
                        <Box component="div" onClick= {() =>  {this.handleClick(0)}} sx={{ mr:2, display: { xs: 'flex' }, maxWidth: 32}}>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png" alt="logo" className="navFlag"></img>
                        </Box>
                        <Box component="div" onClick= {() =>  {this.handleClick(1)}} sx={{ mr:2, display: { xs: 'flex' }, maxWidth: 32}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1920px-Flag_of_Iceland.svg.png" alt="logo" className="navFlag"></img>
                        </Box>
                        <Typography variant="h5">Log In</Typography>
                        <Typography variant="h5">Register</Typography>
*/