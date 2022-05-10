import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DashCard from '../DashCard';
import './DashBoardCardList.css'

const DashboardCardList = ({ cards }) => {
    return (
        <Box className='DashCardList' sx={{ flexGrow: 1, pl: 10, pr: 10}}>
            <Grid className='cardContainer' container spacing={2}>
                {cards.map((card) => (
                    <Grid key={card.id}item lg={4}>
                        <DashCard card={card.data()} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default DashboardCardList;
