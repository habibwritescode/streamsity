import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MusicCard from '../../components/music-cards/music-card'
import { fetchCurrentSong } from '../../redux/actions/songs';
import SkeletonCard from '../skeleton-card/SkeletonCard';
import './music-list.scss'


const MusicList = () => {
    const search = useSelector(state => state.songs.searchResults);
    const isFetching = useSelector(state => state.songs.isFetching);
    const currentSongObj = useSelector(state => state.songs.currentSong)
    const dispatch = useDispatch();

    const fetchSong = (songObj) => {
        dispatch(fetchCurrentSong(songObj))
    }

    return (
        <div className='wrapper'>
            <h2 className='heading'>Results</h2>
            <p className='disclaimer'>All songs are 30 seconds previews. Click on the icon to listen to the full song on deezer</p>
            <ul>
                {/* {console.log(search)} */}

                {
                    isFetching ? <SkeletonCard />
                        :
                        search === undefined || search.length < 1 ? <p className='empty-result'>There are no results here</p>
                            :
                            search.map(song => (
                                <MusicCard
                                    key={song.id}
                                    picture={song.album.cover}
                                    title={song.title}
                                    name={song.artist.name}
                                    duration={song.duration}
                                    song={song.preview}
                                    selectSong={() => fetchSong(song)}
                                    isCurrentSong={song.id === currentSongObj.id}
                                    linkToFullSong={song.link}
                                />
                            ))}
            </ul>
        </div>
    )
};

export default MusicList;