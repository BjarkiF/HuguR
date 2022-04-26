import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const DashboardCardList = ({ pages }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item md={12} lg={6}>
                    <Item>md=12 lg=6</Item>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Item>md=12 lg=6</Item>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Item>md=12 lg=6</Item>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Item>md=12 lg=6</Item>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Item>md=12 lg=6</Item>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Item>md=12 lg=6</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashboardCardList;