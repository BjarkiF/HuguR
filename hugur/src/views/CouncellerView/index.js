import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './councellerStyle.css'

const CouncellerView = () => {
    return (
        <div>
            <img src='https://cdn.quotesgram.com/img/25/16/121214702-media-guidance_counselor-guidance_counsellor-career_adviser-career-career_path-mbcn3206l.jpg' alt='Check internet please'/>
            <h3 id="wip">Student support!</h3>
            <p>You can book an appointment via the software <a href="https://www.karaconnect.com/">Karaconnect</a></p>
            <p>For more information, press <a href=' https://en.ru.is/services/support/'>here!</a></p>
        </div>
    )   
};

export default CouncellerView;