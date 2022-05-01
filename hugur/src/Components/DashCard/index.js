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
        /*<Card>
             <CardActionArea component={Link} to={card.path}>
                 <div className='C'>
                     <CardMedia
                         component="img"
                         height="250"
                         src={card.img}
                         alt="Card Illustration"
                     />
                 </div>
 
                 <CardContent>
                     <Typography variant="h5" component="div">
                         {card.name}
                     </Typography>
                     <Typography variant="body2">
                         {card.description}
                     </Typography>
                 </CardContent>
             </CardActionArea>
         </Card> */
        <div className='Card'>
            <div className='CardName'>{card.name} </div>
            <img className='ImgStyle' src={card.img} alt='CardImage' />
            <div className='CardDescription'>{card.description} </div>
       
        </div>

    )
}

export default DashCard;