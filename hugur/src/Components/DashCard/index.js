import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const DashCard = ({ card }) => {
    return (
        <Card raised='true'>
            <CardActionArea component={Link} to={card.path}>
                <CardMedia 
                    component="img"
                    height="250"
                    src={card.img}
                    alt="Card Illustration"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {card.name}
                    </Typography>
                    <Typography variant="body2">
                        {card.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default DashCard;