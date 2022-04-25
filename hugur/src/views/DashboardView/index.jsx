import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../../Resources/styles'
// import '../../styles/commonStyles'
import './dashStyle.css'

const DashboardView = () => {

    const pages = ['Eat well', 'Exercise', 'Moodbooster', 'Programs', 'Relax', 'Sleep', 'Book with counceller']

    const pageList = pages.map(page =>
            <div className='pageDiv'>
                <h3 id="wip">
                    {page};
                </h3>
            </div>
        );

    return (
        // <div style={styles.main}>
        <div id='mainBody'>
            <h3 id="wip">Coming Soon!</h3>
            {pageList}
        </div>
    )   
};

export default DashboardView;