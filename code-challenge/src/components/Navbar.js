import React, { useState, useContext } from 'react';
import { CollapsedContext } from '../contexts/Collapsed';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Logo from '../images/xtransparent.png';
import CollapsedLogo from '../images/logo-white.png';
import '../css/navbar.css';

const Navbar = () => {
    const [alertsNumber] = useState(32);
    const [collapsed, setCollapsed] = useContext(CollapsedContext);

    const collapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className={collapsed ? 'navbar-container collapsed' : 'navbar-container'}>
            <div className='logo'>
                {!collapsed ? <img src={Logo} alt='xtrades logo' /> : <img className='logo-cutoff' src={CollapsedLogo} alt='xtrades logo' /> }
                {/* <img src={Logo} alt='xtrades logo' /> */}
            </div>
            <div className='links'>
                <div className='link'>
                    <span><NotificationsActiveIcon /></span>
                    {!collapsed ? <h3>Alerts</h3> : <h3 className='hidden'>Alerts</h3> }
                    {!collapsed && alertsNumber !== 0 ? <span className='alerts-number'>{alertsNumber}</span> : <span className='alerts-number hidden'>{alertsNumber}</span>} 
                </div>
                <div className='link'>
                    <span><EmojiEventsIcon /></span>
                    {!collapsed ? <h3>Leaderboard</h3> : <h3 className='hidden'>Leaderboard</h3>}
                </div>
                <div className='link'>
                    <span><WhatshotIcon /></span>
                    {!collapsed ? <h3>Xhub</h3> : <h3 className='hidden'>Xhub</h3>}
                </div>
            </div>
            <div className={!collapsed ? 'membership' : 'membership hidden'}>
                <button className='upgrade-button'>Upgrade membership</button>
            </div>
            <div className='collapse-button' onClick={collapse}>
                <MenuOpenIcon style={{marginRight: '13px'}}/>
                {!collapsed ? <span>Collapse</span> : <span className='hidden'>Collapse</span>}
            </div>
        </div>
    )
}

export default Navbar;