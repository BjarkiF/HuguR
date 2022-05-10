import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import DashboardCardList from '../../Components/DashboardCardList';
import WelcomeHeader from '../../Components/WelcomeHeader';
//import cards from '../../data/Cards';
import { db } from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

const DashboardView = props => {
    const [cards, setCards] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!status) {
            fetchCards();
            updateStatus(true);
        }
    });

    const fetchCards = async () => {
        const response = await getDocs(collection(db, "categories"));

        response.forEach((item)=>{
            console.log(item);
            setCards([...cards, item]);
        });
    };

    const updateStatus = (bool) => {
            setStatus(bool);
    }

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