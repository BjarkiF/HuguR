import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DashboardCardList from '../../Components/DashboardCardList';
import WelcomeHeader from '../../Components/WelcomeHeader';

const DashboardView = () => {
    return (
        <Box>
            <Box>
                <WelcomeHeader />
            </Box>
            <Box mb={5} mt={5}>
                <Typography variant="h4" component="div">
                    Self-Help Tools
                </Typography>
            </Box>
            <Box>
                <DashboardCardList />
            </Box>
        </Box>
    )   
};

export default DashboardView;