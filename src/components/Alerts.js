import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import '../css/alerts.css';

const Alerts = () => {
    return (
        <div className='alerts-container'>
            <Navbar />
            <Dashboard />
        </div>
    )
}

export default Alerts;