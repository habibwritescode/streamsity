import React from 'react';

import MusicList from '../../components/music-list/music-list';
import SearchBar from '../../components/search-bar/search-bar';

import './search.scss';


const SearchPage = () => {
    return (
        <div className='search'>
            <SearchBar />
            <MusicList />
        </div>
    )
};

export default SearchPage;