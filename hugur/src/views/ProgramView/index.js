import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProgramView = () => {
    const fields = ['Exercises', 'Helpful Videos', 'General Advice'];

    const category = 'programs';

    const fieldList = fields.map(field =>
        // Should the whole div be clickable ? 
        <Link className='SectionLink' to={`/${field.trim().toLowerCase()}/${category}`}>
            <div className='field' onClick={console.log('hello')}>
                    <p>{field}</p>
            </div>
        </Link>
    );

    return (
        <div className='mainBody'>
            <h3 id="wip">Self-help tools</h3>
            {fieldList}
        </div>
    )     
};

export default ProgramView;