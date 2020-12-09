import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import useScreenSize from 'use-screen-size';

import { fetchCurrentSong, handlePauseOrPlay, isCurrentSongPaused } from '../../redux/actions/songs';

import 'react-h5-audio-player/src/styles.scss';
import './audio-player.scss';


const Player = () => {
    const audioEl = useRef(null);
    const currentSongObj = useSelector(state => state.songs.currentSong);
    const searchResults = useSelector(state => state.songs.searchResults);
    const song = currentSongObj.preview;
    const dispatch = useDispatch();
    const indexOfCurrentSong = searchResults ? searchResults.findIndex(result => result.id === currentSongObj.id) : '';
    const size = useScreenSize();

    useEffect(() => {
        const handlePauseOrPlayInMusicCard = () => {
            const player = audioEl.current.audio.current;
            const isPaused = player.paused;
            isPaused ? player.play() : player.pause()
        }
        dispatch(handlePauseOrPlay(handlePauseOrPlayInMusicCard))
    })

    const checkIfPausedFromPlayer = () => {
        const player = audioEl.current.audio.current;
        const isPaused = player.paused;
        dispatch(isCurrentSongPaused(isPaused))
    }

    const handleClickPrev = () => {
        if (indexOfCurrentSong > 0) {
            dispatch(fetchCurrentSong(searchResults[indexOfCurrentSong - 1]));
        }
    };

    const handleClickNext = () => {
        if (indexOfCurrentSong < searchResults.length - 1 && searchResults.length > 0) {
            dispatch(fetchCurrentSong(searchResults[indexOfCurrentSong + 1]));
        }
    };


    return (
        <AudioPlayer
            ref={audioEl}
            autoPlay
            src={song}
            className='player'
            onClickPrevious={handleClickPrev}
            onClickNext={handleClickNext}
            layout={size.width < 768 ? 'stacked-reverse' : 'horizontal-reverse'}
            // customAdditionalControls={[]}
            customVolumeControls={[]}
            showSkipControls={true}
            showJumpControls={false}
            onEnded={handleClickNext}
            onPause={checkIfPausedFromPlayer}
            onPlay={checkIfPausedFromPlayer}

            customAdditionalControls={
                [song && (
                    <div className='row song-details-player'>
                        <img className='artist-pic' src={currentSongObj.album.cover} alt="" />
                        <div className='column'>
                            <p className='song-title'>{currentSongObj.title}</p>
                            <span className='artist-name'>{currentSongObj.artist.name}</span>
                        </div>
                    </div>
                )
                ]
            }
            customProgressBarSection={
                [
                    RHAP_UI.PROGRESS_BAR,
                    // <div className='equal'>Equalizer</div>,
                    RHAP_UI.DURATION,
                    <span className='duration-margin'></span>,
                    RHAP_UI.VOLUME,
                ]
            }
        />
    )
}
export default Player;