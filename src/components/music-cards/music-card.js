import React from 'react';

import { ReactComponent as PlayListIcon } from './icons/playlist.svg';

import './music-card.scss';


const MusicCard = (props) => {
    return (
        <li>
            <div className="card" onClick={props.handlePlay}>
                <div className='container row'>
                    <div className='img-and-song row'>
                        <img className='artist-pic' src={props.picture} alt="" />
                        <div className='song-info column'>
                            <p className='song-title'>{props.title}</p>
                            <span className='artist-name'>{props.name}</span>
                        </div>
                    </div>
                    <div className='icon-and-duration row'>
                        <span className='duration'>{props.duration}</span>
                        <PlayListIcon className='playlist' />
                    </div>
                </div>
            </div>
        </li>
    )
};

export default MusicCard;