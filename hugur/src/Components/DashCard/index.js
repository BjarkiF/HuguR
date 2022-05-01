import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, dividerClasses } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import './DashCard.css'

const DashCard = ({ card }) => {
    return (

        <CardActionArea component={Link} to={card.path}>
            <div className='Card'>
                <div className='CardName'>{card.name} </div>
                <img className='ImgStyle' src={card.img} alt='CardImage' />
                <div className='CardDescription'>{card.description} </div>
            </div>
        </CardActionArea>
    )
}

export default DashCard;