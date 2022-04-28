import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './eatStyle.css'

function get_url(field) {
    const url = "";
    if(field == 'Exercises') {
        url = "exercises";
    } else if(field == 'Helpful Videos') {
        url = "videos";
    } else if(field == 'General Advice') {
        url = "advice";
    }
    return url;
}

const EatView = () => {

    const fields = ['Exercises', 'Helpful Videos', 'General Advice'];

    const category = 'eat';

    // Idea here that get_url returns whatever url we need for the first part of url
    const fieldList = fields.map(field =>
        <Link to={`/${get_url(field)}/${category}`}> {/* This breaks the site */}
            <div className='field' onClick={console.log('hello')}>
                <p>{field}</p>
            </div>
        </Link>
        );

    return (
        <div className='mainBody'>
            <h3 id="wip">Self help tools</h3>
            {fieldList}
        </div>
    )   
};

export default EatView;