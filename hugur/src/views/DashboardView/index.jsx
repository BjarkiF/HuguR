import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import DashboardCardList from '../../Components/DashboardCardList';
import WelcomeHeader from '../../Components/WelcomeHeader';
//import cards from '../../data/Cards';
import { db } from '../../utils/firebase';
import { onSnapshot, collection } from 'firebase/firestore';

const DashboardView = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, "categories"), (snapshot) => {
            setCards(
                snapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
            )
        })
    }, []);

    return (
        <Box>
            <Box>
                <WelcomeHeader />
            </Box>
            <Box mb={5} mt={5}>
                <Typography variant="h4" sx={{  fontWeight: 'medium', fontFamily:'dosis'}} component="div">
                    HuguR offers the following Self-Help Tools
                </Typography>
            </Box>
            <Box>
                <DashboardCardList cards={cards}/>
            </Box>
        </Box>
    )  
};

export default DashboardView;