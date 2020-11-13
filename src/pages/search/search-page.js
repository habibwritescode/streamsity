import React from 'react';

import MusicList from '../../components/music-list/music-list';

import './search.scss';


const SearchPage = () => {
    return (
        <div className='search'>
            <MusicList />
        </div>
    )
};

export default SearchPage;