import { Button, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

const WelcomeHeader = () => {
    return(
        <Box sx={{ backgroundColor: '#E6F1D8', fontFamily:'dosis', pt: 5}}>
            <Typography variant="h3" component="div" sx={{fontFamily:'dosis', mt: 5, mb: 5}}>
                Welcome to HuguR!
            </Typography>
            <Typography variant="h5" sx={{ fontFamily:'dosis', mb: 2 }}>
                HuguR is offering free online tools to improve the mental wellbeing of students.
            </Typography>
            <Typography variant="h5" sx={{ fontFamily:'dosis', mb: 10 }}>
                It was created at Reykjavík University from students to help other students in collaboration
                with psychologists.
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontFamily:'dosis', mb:5 }}>
                How are you feeling today?
            </Typography>
            <Button variant="contained" color="success" size="large" sx={{ backgroundColor:'#81B93E', mb: 10 } } >
                Go to Questionnaire
            </Button>
        </Box>
    )
}

export default WelcomeHeader;