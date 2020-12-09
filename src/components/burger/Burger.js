import React, { useState } from 'react';

import Sidebar from '../sidebar/sidebar';

import './burger.css'

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='burger-cont' onClick={() => setOpen(!open)}>
                <div className={`bar ${open ? 'open bar-open-color' : 'close bar-close-color'}`} />
                <div className={`bar ${open ? 'open bar-open-color' : 'close bar-close-color'}`} />
                <div className={`bar ${open ? 'open bar-open-color' : 'close bar-close-color'}`} />
            </div>
            <Sidebar closeNavOnLinkClick={(e) => e.target.id === 'event-target' && setOpen(!open)} open={open} />
        </>
    )
}

export default Burger;