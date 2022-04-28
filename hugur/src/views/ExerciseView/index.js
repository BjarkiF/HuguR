import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ExerciseView = () => {
    const fields = ['Exercises', 'Helpful Videos', 'General Advice'];

    const category = 'exercise';

    const fieldList = fields.map(field =>
        // Should the whole div be clickable ? 
        <Link to={`/advice/${category}`}>
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

export default ExerciseView;