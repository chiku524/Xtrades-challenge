import React, { useState, useEffect, useRef, useContext } from 'react';
import { CollapsedContext } from '../contexts/Collapsed';
import '../css/dashboard.css';

//icons
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SettingsIcon from '@material-ui/icons/Settings';
import FaceIcon from '@material-ui/icons/Face';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

//dropdown menu
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

//modal
import MyModal from './Modal';

//scroll package for the trending tickers
import { ScrollBoost } from 'react-scrollbooster';

//company logos, profile photos and charts
import appleLogo from '../images/Apple_Logo.png';
import appleChart from '../images/apple-chart.png';
import teslaLogo from '../images/tesla_logo.png';
import stateStreetLogo from '../images/state-street-logo.png';
import amazonLogo from '../images/Amazon-Logo.png';
import piano from '../images/piano-pic.jpg';

const Dashboard = () => {
    const [filter, setFilter] = useState('Today');
    const [alertsFilter, setAlertsFilter] = useState('All');
    const [rotateExpandIconTickers, setRotateExpandIconTickers] = useState(false);
    const [rotateExpandIconAlerts, setRotateExpandIconAlerts] = useState(false);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [openAlertsMenu, setOpenAlertsMenu] = useState(false);
    const [trendingTickers] = useState(
        [
            {symbol: 'AAPL', company: 'Apple Inc.', logo: appleLogo, alertsCount: 15, bullish: 64, bearish: 36, chart: appleChart},
            {symbol: 'TSLA', company: 'Tesla, Inc.', logo: teslaLogo, alertsCount: 12, bullish: 55, bearish: 45, chart: appleChart},
            {symbol: 'SPY', company: 'S&P 500 Index', logo: stateStreetLogo, alertsCount: 7, bullish: 36, bearish: 64, chart: appleChart},
            {symbol: 'AMZN', company: 'amazon.com', logo: amazonLogo, alertsCount: 17, bullish: 55, bearish: 45, chart: appleChart},
            {symbol: 'AAPL', company: 'Apple Inc.', logo: appleLogo, alertsCount: 15, bullish: 64, bearish: 36, chart: appleChart},
            {symbol: 'TSLA', company: 'Tesla, Inc.', logo: teslaLogo, alertsCount: 12, bullish: 55, bearish: 45, chart: appleChart},
            {symbol: 'SPY', company: 'S&P 500 Index', logo: stateStreetLogo, alertsCount: 7, bullish: 36, bearish: 64, chart: appleChart},
            {symbol: 'AMZN', company: 'amazon.com', logo: amazonLogo, alertsCount: 17, bullish: 55, bearish: 45, chart: appleChart}
        ]
    );
    const [recentAlerts] = useState(
        [
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', close: '4:22 PM', profit: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', close: '1:25 AM', profit: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', profit: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', close: '5:52 PM', loss: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', profit: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', close: '2:32 PM', loss: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', profit: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', close: '8:01 AM', profit: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', loss: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},
            {picture: piano, rank: 57, username: 'CKadera', handle: '@ckadera', tradeLogo: appleLogo, action: 'Bought AAPL shares', price: 210.22, strategies: ['Momentum', 'Lotto', 'Day', 'Vertical Spread'], open: '2/2/2021', close: '7:21 AM', profit: 5, actions: {likes: 5, bookmarks: 10, comments: 37}},

        ]
    );
    const [showModalDefault] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [showModal, setShowModal] = useState(false);
    const tickersAnchorRef = useRef(null);
    const alertsAnchorRef = useRef(null);
    const [collapsed] = useContext(CollapsedContext);

    //dropdown menu for sorting
    const handleFilterMenu = () => {
        setOpenFilterMenu((prevOpen) => !prevOpen);
        setRotateExpandIconTickers(!rotateExpandIconTickers);
    };
    const handleFilterMenuAlerts = () => {
        setOpenAlertsMenu((prevOpenAlerts) => !prevOpenAlerts);
        setRotateExpandIconAlerts(!rotateExpandIconAlerts);
    };
    
    const handleCloseFilterMenu = (event) => {
    if (tickersAnchorRef.current && tickersAnchorRef.current.contains(event.target)) {
        return;
    }
    
    if(alertsAnchorRef.current && alertsAnchorRef.current.contains(event.target)) {
        return;
    }

    setOpenFilterMenu(false);
    setOpenAlertsMenu(false)
    setRotateExpandIconTickers(false);
    setRotateExpandIconAlerts(false);
    };

    function handleListKeyDown(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            setOpenFilterMenu(false);
            setOpenAlertsMenu(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(openFilterMenu);
    const prevOpenAlerts = useRef(openAlertsMenu);

    useEffect(() => {
    if (prevOpen.current === true && openFilterMenu === false) {
        tickersAnchorRef.current.focus();
    }
    if(prevOpenAlerts.current === true && openAlertsMenu === false) {
        alertsAnchorRef.current.focus();
    }

    prevOpen.current = openFilterMenu;
    prevOpenAlerts.current = openAlertsMenu;
    }, [openFilterMenu, openAlertsMenu]);

    //recent alerts section
    const alertsSelector = (event) => {
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            category.classList.remove('chosen');
            category.classList.add('faded');
        });
        event.currentTarget.classList.add('chosen');
        event.currentTarget.classList.remove('faded');
    }

    //modals
    const openModal = (index) => {
        handleModalState(index);
    }

    const handleModalState = (index) => {
        // 1. Make a shallow copy of the items
        let items = [showModalDefault];
        // 2. Make a shallow copy of the item you want to mutate
        let item = items[index];
        // 3. Replace the property you're intested in
        item = true;
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        items[index] = item;
        // 5. Set the state to our new copy
        setShowModal(items);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className={collapsed ? 'dashboard-container expand' : 'dashboard-container'}>
            <div className='header'>
                <h4>Alerts</h4>
                <div className='searchbar'>
                    <SearchIcon className='search-icon' />
                    <input className='search' type='search' placeholder='Search for ticker, user, or other information...'></input>
                </div>
                <div className='referrals'>
                    <button className='referrals-button'>+ Invite a friend</button>
                </div>
                <div className='nav-icons'>
                    <span><NotificationsIcon /></span>
                    <span><LiveHelpIcon /></span>
                    <span><SettingsIcon /></span>
                </div>
                <div className='profile'>
                    <FaceIcon />
                </div>
            </div>

            <div className='trending-tickers'>
                <div className='section-header'>
                    <h4>Trending Tickers</h4>
                    <div className='filter-button ripple' ref={tickersAnchorRef} onClick={handleFilterMenu}>
                        <div>Sort by: <div className='filter'>{filter}</div></div>
                        <span className={rotateExpandIconTickers ? 'expand-icon rotate' : 'expand-icon'}><ExpandMoreIcon /></span>
                    </div>
                    <Popper open={openFilterMenu} anchorEl={tickersAnchorRef.current} role={undefined} transition disablePortal className='menu'>
                        <ClickAwayListener onClickAway={handleCloseFilterMenu}>
                            <MenuList autoFocusItem={openFilterMenu} onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={() => {setFilter('Today'); handleCloseFilterMenu(window.event);}}>Today</MenuItem>
                                <MenuItem onClick={() => {setFilter('This Week'); handleCloseFilterMenu(window.event);}}>This Week</MenuItem>
                                <MenuItem onClick={() => {setFilter('This Month'); handleCloseFilterMenu(window.event);}}>This Month</MenuItem>
                                <MenuItem onClick={() => {setFilter('This Year'); handleCloseFilterMenu(window.event);}}>This Year</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Popper>
                </div>
                <ScrollBoost direction='horizontal' friction='0.2' scrollMode='native'>
                        {({ viewport, scrollbooster }) => (
                            <div className='tickers'>
                                <div className='fade start'></div>
                                <div className='tickers-content' ref={viewport}>
                                    <div className='content'>
                                        {trendingTickers.map(ticker => <div className='ticker-card'>
                                            <div className='stock-details'>
                                                <img src={ticker.logo} alt={`${ticker}'s logo`} className='ticker-logo' />
                                                <div className='stock-name'>
                                                    <div className='stock-symbol'>{ticker.symbol}</div>
                                                    <div className='stock-company'>{ticker.company}</div>
                                                </div>
                                                <div className='options-menu'><MoreHorizIcon /></div>
                                            </div>
                                            <div className='chart'>
                                                <img src={ticker.chart} alt={`${ticker}'s chart`} className='chart' />
                                            </div>
                                            <div className='alerts-prediction'>
                                                <div className='alert-count'>{ticker.alertsCount} alerts</div>
                                                <div className='prediction'>{ticker.bullish > ticker.bearish ? 
                                                    <span style={{color: 'grey'}}><span style={{color: 'green', marginRight: '4px'}}>{ticker.bullish}%</span>bullish</span> : 
                                                    <span style={{color: 'grey'}}><span style={{color: 'red', marginRight: '4px'}}>{ticker.bearish}%</span>bearish</span>}
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div>
                                <div className='fade end'></div> 
                            </div>
                        )}
                </ScrollBoost>
            </div>

            <div className='recent-alerts'>
                <div className='recent-alerts-header'>
                    <div className='title'><span>Recent alerts</span></div>
                    <div className='categories'>
                        <div className='category left chosen' onClick={alertsSelector}><span>All</span></div>
                        <div className='category' onClick={alertsSelector}><span>Top alerts</span></div>
                        <div className='category right' onClick={alertsSelector}><span>Following</span></div>
                    </div>
                    <div className='dropdown-menu'>
                        <div className='filter-button ripple' ref={alertsAnchorRef} onClick={handleFilterMenuAlerts}>
                            <div>Sort by: <div className='filter'>{alertsFilter}</div></div>
                            <span className={rotateExpandIconAlerts ? 'expand-icon rotate' : 'expand-icon'}><ExpandMoreIcon /></span>
                        </div>
                        <Popper open={openAlertsMenu} anchorEl={alertsAnchorRef.current} role={undefined} transition disablePortal className='menu'>
                            <ClickAwayListener onClickAway={handleCloseFilterMenu}>
                                <MenuList autoFocusItem={openAlertsMenu} onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={() => {setAlertsFilter('All'); handleCloseFilterMenu(window.event);}}>All</MenuItem>
                                    <MenuItem onClick={() => {setAlertsFilter('This Week'); handleCloseFilterMenu(window.event);}}>This Week</MenuItem>
                                    <MenuItem onClick={() => {setAlertsFilter('This Month'); handleCloseFilterMenu(window.event);}}>This Month</MenuItem>
                                    <MenuItem onClick={() => {setAlertsFilter('This Year'); handleCloseFilterMenu(window.event);}}>This Year</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Popper>
                    </div>
                    <div className='descriptions-bar'>
                        <div className='trader'><span className='desc'>Trader &nbsp;<ExpandMoreIcon /></span></div>
                        <div className='trade'><span className='desc'>Trade &nbsp;<ExpandMoreIcon /></span></div>
                        <div className='strategy'><span className='desc'>Strategy type &nbsp;<ExpandMoreIcon /></span></div>
                        <div className='open-close'><span className='desc'>Open / Close &nbsp;<ExpandMoreIcon /></span></div>
                        <div className='profit-loss'><span className='desc'>Profit / loss &nbsp;<ExpandMoreIcon /></span></div>
                        <div className='actions'><span className='desc'>Actions &nbsp;<ExpandMoreIcon /></span></div>
                    </div>
                </div>
                <div className='section'>
                    {recentAlerts.map((item, index) => 
                        <div className='alert-container' key={index} onClick={() => openModal(index)}>
                            <div className='responsive-pic'>
                                <div className='picture'>
                                    <img className='profile-pic' src={item.picture} alt='user profile pic'/>
                                </div>
                            </div>
                            <div className='username-handle'>
                                <div className='username'>{item.username}</div>
                                <div className='handle'>{item.handle}</div>
                            </div>
                            <div className='trade-logo'><img className='logo' src={item.tradeLogo} alt='stock logo' /></div>
                            <div className='trade-details'>
                                <div className='action'>{item.action}</div>
                                <div className='price'>@ {item.price}</div>
                            </div>
                            <div className='strategy'>
                                {item.strategies.slice(0, 2).map(strat => 
                                <div className='strategy-container'>
                                    <span>{strat}</span>
                                </div>
                                )}
                                <div><span>+`{item.strategies.length - 2}</span></div>
                            </div>
                            <div className='open-close'>
                                <div className='open'><span>Opened {item.open}</span></div>
                                {item.close ? <div className='close'><span style={{fontWeight: 'bold'}}>Closed {item.close}</span></div> : null}
                            </div>
                            <div className='profit-loss'>
                                <div className={item.profit ? 'stat-container green' : 'stat-container red'}>
                                    {item.profit ? <span>{item.close ? 'Made' : 'Up'} {item.profit}%</span> : <span>{item.close ? 'Lost' : 'Down'} {item.loss}%</span>}
                                </div>
                            </div>
                            <div className='actions'>
                                <span><ThumbUpIcon /> &nbsp; {item.actions.likes}</span>
                                <span><BookmarkIcon /> {item.actions.bookmarks}</span>
                                <span><QuestionAnswerIcon /> &nbsp; {item.actions.comments}</span>
                            </div>
                            <MyModal item={item} open={showModal[index]} onClose={closeModal} otherAlerts={recentAlerts.filter(alert => alert.username === item.username).slice(0, 3)} chart={trendingTickers[0].chart} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;