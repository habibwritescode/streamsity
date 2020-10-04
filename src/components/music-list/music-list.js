import React, { useState } from 'react';

import MusicCard from '../../components/music-cards/music-card'

import './music-list.scss'


const MusicList = ({ search }) => {
    const [song, setSong] = useState('')

    const playSong = (link) => {
        setSong(link)
    }

    return (
        <div className='wrapper'>
            <h1 className='heading'>Results</h1>
            <ul>
                {search.length < 1 ? <p className='empty-result'>No results for this search</p>
                    : search.map(song => (
                        <MusicCard
                            key={song.id}
                            picture={song.album.cover}
                            title={song.title}
                            name={song.artist.name}
                            duration={song.duration}
                            song={song.preview}
                            handlePlay={() => playSong(song.preview)}
                        />
                    ))}
            </ul>
        </div>
    )
};

export default MusicList;