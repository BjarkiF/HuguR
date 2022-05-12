import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return(
        <Box sx={{ backgroundColor: '#D5E0C8', pt: 5, height:'10%'}}>
           
        <Typography variant="h5" component="div" sx={{mt: 5, mb: 5, fontFamily:'dosis', fontSize: '12px'}}>
            © HuguR Reykjavík University 2022
            </Typography>
        </Box>
    )
}

export default Footer;