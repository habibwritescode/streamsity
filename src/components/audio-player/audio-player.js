import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import 'react-h5-audio-player/src/styles.scss';
import './audio-player.scss'


const Player = ({ song }) => (
    <AudioPlayer
        autoPlay
        src={song}
        className='player'
        onPlay={e => console.log("onPlay")}
        layout='horizontal-reverse'
        customAdditionalControls={[]}
        customVolumeControls={[]}
        CustomIcons={{
            // play: ReactNode,
            // pause: ReactNode,
            // previous: ReactNode,
            // next: ReactNode,
            // volume: ReactNode,
            // volumeMute: ReactNode
        }}
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

export default Player;