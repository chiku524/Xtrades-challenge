import React, {useState, useEffect, useRef, useContext} from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import '../css/alerts.css';

const Alerts = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className='alerts-container'>
            <Navbar />
            <Dashboard />
        </div>
    )
}

export default Alerts;