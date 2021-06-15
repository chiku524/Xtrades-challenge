import React, { useEffect, useState } from 'react';
import '../css/modal.css';

//mui components
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//mui icons
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';

const MyModal = ({item, open, onClose, otherAlerts, chart}) => {

    return (
        <Modal open={open} onClose={onClose} BackdropComponent={Backdrop} BackdropProps={{timeout: 500}} closeAfterTransition >
            <Fade in={open}>
                <div className='modal-container'>
                    <div className='close-button' onClick={onClose}><CloseIcon /></div>
                    <div className='header'>
                        <div className='user-details'>
                            <div className='responsive-pic'>
                                <div className='picture'>
                                    <img className='profile-pic' src={item.picture} alt='user profile pic'/>
                                </div>
                            </div>
                            <div className='username-handle'>
                                <span className='username'>{item.username}</span>
                                <span className='handle'>{item.handle}</span>
                            </div>
                            <div className='follow-button'><span>Follow</span></div>
                        </div>
                        <div className='trade-details'>
                            <img src={item.tradeLogo} alt='stock logo' />
                            <div className='trade-result'>
                                <span className='action'>{item.action}</span>
                                <span className='price'>{item.price}</span>
                            </div>
                            <div className='time'>
                                <span>{item.open}</span>
                                {item.close ? <span>{item.close}</span> : null}
                            </div>
                            {item.profit ? <span className='profit'>Up {item.profit}%</span> : <span className='loss'>Down {item.loss}%</span>}
                            <div className='actions'>
                                <span><ThumbUpIcon /> {item.actions.likes}</span>
                                <span><BookmarkIcon /> {item.actions.bookmarks}</span>
                                <span><QuestionAnswerIcon /> {item.actions.comments}</span>
                            </div>
                            <div className='tip-button'><AttachMoneyIcon /> Give a tip</div>
                        </div>
                    </div>
                    <div className='bottom-section'>
                        <div className='left-side-section'>
                            <div className='trader-stats'>
                                <div className='title'>Trader's stats</div>
                                <div className='stats'>
                                    <div className='rank stat'>
                                        <span className='number'>{item.rank}</span>
                                        <span className='title'>Rank</span>
                                    </div>
                                    <div className='win-rate stat'>
                                        <span className='number'>88%</span>
                                        <span className='title'>Win rate</span>
                                    </div>
                                    <div className='avg-gain stat'>
                                        <span className='number'>9%</span>
                                        <span className='title'>Avg. gain</span>
                                    </div>
                                    <div className='avg-trade-time stat'>
                                        <span className='number'>18 m</span>
                                        <span className='title'>Avg. trade time</span>
                                    </div>
                                </div>
                            </div>
                            <div className='trader-strategies'>
                                <div className='title'>Trader's style</div>
                                {item.strategies.map(strat => <span>{strat}</span>)}
                            </div>
                            <div className='other-alerts'>
                                <span className='title'>Trader's other alerts</span>
                                {otherAlerts.map(alert => 
                                    <div className='alert-card'>
                                        <img src={alert.tradeLogo} alt='stock logo' />
                                        <div className='trade-details'>
                                            <span className='action'>{alert.action}</span>
                                            <span className='price'>@ {alert.price}</span>
                                        </div>
                                        <span className='open-date'>{alert.open}</span>
                                    </div>    
                                )}
                            </div>
                        </div>
                        <div className='right-section'>
                            <div className='title'>SPY entry at old support</div>
                            <div className='strategies'>
                                {item.strategies.map(strat => <span className='strategy'>{strat}</span>)}
                            </div>
                            <div className='writing-content'>
                                <p>Augue interdum velit euismod in pellentesque massa. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. At urna condimentum mattis pellentesque id nibh.</p>
                                <p>Risus ultricies tristique nulla aliquet. Quam id leo in vitae turpis. Et ligula ullamcorper malesuada proin libero nunc. Arcu risus quis varius quam. Etiam dignissim diam quis enim. Gravida quis blandit turpis cursus in hac habitasse. </p>
                                <p>Nibh sed pulvinar proin gravida hendrerit. Cursus euismod quis viverra nibh cras pulvinar. Tortor posuere ac ut consequat semper. Id semper risus in hendrerit gravida rutrum quisque non. Ultrices dui sapien eget mi. </p>
                            </div>
                            <img src={chart} alt='apple stock chart' />
                            <div className='comments-section'>
                                <div className='breakpoint'>
                                    <hr className='line' />
                                    <span>Yesterday</span>
                                    <hr className='line' />
                                </div>
                                <div className='comment'>
                                    <div className='responsive-pic'>
                                        <div className='picture'>
                                            <img className='profile-pic' src={item.picture} alt='user profile pic'/>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='username-date'>
                                            <span className='username'>{item.username}</span>
                                            <span className='date'>Yesterday at 10:22 pm</span>
                                        </div>
                                        <div className='writing'>
                                            <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='comment'>
                                    <div className='responsive-pic'>
                                        <div className='picture'>
                                            <img className='profile-pic' src={item.picture} alt='user profile pic'/>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='username-date'>
                                            <span className='username'>{item.username}</span>
                                            <span className='date'>Yesterday at 10:22 pm</span>
                                        </div>
                                        <div className='writing'>
                                            <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='breakpoint'>
                                    <hr className='line' />
                                    <span>Today</span>
                                    <hr className='line' />
                                </div>
                                <div className='comment'>
                                    <div className='responsive-pic'>
                                        <div className='picture'>
                                            <img className='profile-pic' src={item.picture} alt='user profile pic'/>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='username-date'>
                                            <span className='username'>{item.username}</span>
                                            <span className='date'>Yesterday at 10:22 pm</span>
                                        </div>
                                        <div className='writing'>
                                            <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='comment'>
                                    <div className='responsive-pic'>
                                        <div className='picture'>
                                            <img className='profile-pic' src={item.picture} alt='user profile pic'/>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='username-date'>
                                            <span className='username'>{item.username}</span>
                                            <span className='date'>Yesterday at 10:22 pm</span>
                                        </div>
                                        <div className='writing'>
                                            <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='message-box-placeholder'>
                                
                            </div>
                            <div className='message-box'>
                                <textarea className='text-area' placeholder="Write your message here..."></textarea>
                                <span className='emoji'><InsertEmoticonIcon /></span>
                                <span className='attachment'><AttachFileIcon /></span>
                                <img className='profile-pic' src={item.picture} alt='profile pic' />
                                <div className='send-button'><span>Send</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default MyModal;