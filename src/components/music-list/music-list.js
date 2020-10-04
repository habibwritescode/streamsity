import React, { Component } from 'react';

import MusicCard from '../../components/music-cards/music-card'

import './music-list.scss'

class MusicList extends Component {
    state = {
        song: ''
    }

    playSong = (link) => {
        this.setState({
            song: link
        })
    }

    render() {
        const { search } = this.props
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
                                handlePlay={() => this.playSong(song.preview)}
                            />
                        ))}
                </ul>
            </div>
        )
    }
}

export default MusicList