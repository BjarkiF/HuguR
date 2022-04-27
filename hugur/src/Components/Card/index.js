import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import cardImg from '../../static/images/stress.jpg';

const TestCard = () => {
    return (
        <Card raised='true'>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="200"
                    src= { cardImg }
                    alt="stress"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ex nisl, at hendrerit tellus iaculis eu. 
                        Quisque id erat eget velit pulvinar auctor non vel nunc. Vestibulum at elit id turpis pulvinar tincidunt.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TestCard;