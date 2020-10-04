import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as MenuIcon } from './icons/menu.svg';

import './sidebar.scss';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to='/' className='app-name'>
                <h1>Stream<span className='sity'>sity</span></h1>
            </Link>
            <div>
                <div className="first-section">
                    <p className='library'>LIBRARY</p>
                    <div className='links-container'>
                        <NavLink
                            exact
                            to='/'
                            className='link'
                        >
                            <HomeIcon className="icon" />
                            Home
                        </NavLink>

                        <NavLink
                            to='/browse'
                            className='link'
                        >
                            <MenuIcon className='icon' />
                            Browse
                        </NavLink>

                        <NavLink
                            to='/playlist'
                            className='link'
                        >
                            Playlist
                        </NavLink>

                        <NavLink
                            to='/artists'
                            className='link'
                        >
                            Artists
                        </NavLink>

                        <NavLink
                            to='/albums'
                            className='link'
                            activeStyle={{ color: '#ff00cd' }}
                        >
                            Albums
                        </NavLink>
                    </div>
                </div>
                <div className="second-section">
                    <p className="discover">DISCOVER</p>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;