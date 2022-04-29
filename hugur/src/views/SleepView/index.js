import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SleepView = () => {
    const fields = ['Exercises', 'Helpful Videos', 'General Advice'];

    const category = 'sleep';

    const fieldList = fields.map(field =>


        <Link to={`/${field.trim().toLowerCase()}/${category}`}>
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

export default SleepView;