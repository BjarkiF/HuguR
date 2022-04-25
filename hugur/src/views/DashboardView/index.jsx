import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../../Resources/styles'

const DashboardView = () => {

    const pages = ['Eat well', 'Exercise', 'Moodbooster', 'Programs', 'Relax', 'Sleep', 'Book with counceller']

    const pageList = pages.map(page =>
            <div style={styles.pageDiv}>
                <h3 id="wip">
                    {page};
                </h3>
            </div>
        );

    return (
        // <div style={styles.main}>
        <div id="mainBody">
            <h3 id="wip">Coming Soon!</h3>
            {pageList}
            {/* <div>
                <h3 id="wip">
                    Eat well!
                </h3>
            </div> */}
        </div>
    )   
};

export default DashboardView;