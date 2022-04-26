import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TestCard from '../Card';

const DashboardCardList = ({ pages }) => {
    return (
        <Box sx={{ flexGrow: 1, pl: 10, pr: 10}}>
            <Grid container spacing={10}>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
                <Grid item md={12} lg={4}>
                    <TestCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashboardCardList;