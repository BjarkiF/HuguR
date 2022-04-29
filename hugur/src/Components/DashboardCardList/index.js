import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DashCard from '../DashCard';

const DashboardCardList = ({ cards }) => {
    return (
        <Box sx={{ flexGrow: 1, pl: 10, pr: 10}}>
            <Grid container spacing={10}>
                {cards.map((card) => (
                    <Grid key={card.name}item md={12} lg={4}>
                        <DashCard card={card} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default DashboardCardList;
