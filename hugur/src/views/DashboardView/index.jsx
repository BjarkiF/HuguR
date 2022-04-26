import React from 'react';
import { Link, Outlet } from 'react-router-dom';
//import styles from '../../Resources/styles'
// import '../../styles/commonStyles'
//import './dashStyle.css'
import DashboardCardList from '../../Components/DashboardCardList';

const DashboardView = () => {

    const pages = ['Eat well', 'Exercise', 'Moodbooster', 'Programs', 'Relax', 'Sleep', 'Book with councellor']

    const pageList = pages.map(page =>
            <div className='pageDiv'>
                <h3 id="wip">
                    {page};
                </h3>
            </div>
        );

    return (
        <div id='mainBody'>
            {DashboardCardList}
        </div>
    )   
};

export default DashboardView;