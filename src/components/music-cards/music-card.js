import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as DeezerIcon } from './icons/deezer-logo.svg';
import { ReactComponent as PlayIcon } from './icons/play.svg';
import { ReactComponent as PauseIcon } from './icons/pause.svg';

import './music-card.scss';


const MusicCard = ({ selectSong, picture, title, name, duration, isCurrentSong, linkToFullSong }) => {
    const state = useSelector(state => state.songs);
    const handlePauseOrPlay = state.handlePauseOrPlay;
    const isPaused = state.isCurrentSongPaused;
    const durationMins = Math.trunc(duration / 60);
    const durationSecs = duration % 60;


    return (
        <li>
            <div className="card" >
                <div
                    className={`container row ${isCurrentSong ? 'active' : ''} `}
                    onClick={isCurrentSong ? handlePauseOrPlay : selectSong}
                >
                    <div className='img-and-song row'>
                        <div className='image-icon-container'>
                            {
                                isCurrentSong && !isPaused ?
                                    <PauseIcon className='pause-play' />
                                    :
                                    <PlayIcon className={`pause-play play`} />
                            }
                            {
                                isCurrentSong ?
                                    ''
                                    :
                                    <PlayIcon className={`pause-play play`} />
                            }
                            <img className='artist-pic' src={picture} alt="" />
                        </div>
                        <div className='song-info column'>
                            <p className='song-title'>{title}</p>
                            <span className='artist-name'>{name}</span>
                        </div>
                    </div>
                    <div className='icon-and-duration row'>
                        <span className='duration'>{durationMins}:{durationSecs < 10 && 0}{durationSecs}</span>
                        <div className='deezer-cont'>
                            <a href={linkToFullSong} target="_blank" onClick={(e) => e.stopPropagation()} rel="noopener noreferrer" >
                                <DeezerIcon className='playlist' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default MusicCard;