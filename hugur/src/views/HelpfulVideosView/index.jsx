import React from "react";
import { Route, Link, UseParams, useParams } from "react-router-dom";

import './HelpfulVideosView.css'

const titles = ['Title', 'Title']


const HelpfulVideosView = () => {
    const { category } = useParams();

    const renderCardSection = (title) => {
        return <div className='HelpfulVideosView__CardSection'>
            <h3>{title}</h3>
            <div className='HelpfulVideosView__Card'>
                <div className='HelpfulVideosView__PlayLogo'>
                    <img src="/play.svg" alt="image" />
                </div>
            </div>
        </div>
    }

    return (
        <div className='HelpfulVideosView'>
            {titles.map(v => renderCardSection(v))}
        </div>
    )
};

export default HelpfulVideosView;