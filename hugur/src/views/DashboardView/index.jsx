import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './dashStyle.css'

const DashboardView = () => {

    const pages = ['Eat well', 'Exercise', 'Moodbooster', 'Programs', 'Relax', 'Sleep', 'Book with counceller']

    const pageList = pages.map(page =>
            <div className='pageDiv'>
                <h3 id="wip">
                    {page}
                </h3>
            </div>
        );

    return (
        // <div style={styles.main}>
        <div id='mainBody'>
            {pageList}
        </div>
    )   
};

export default DashboardView;