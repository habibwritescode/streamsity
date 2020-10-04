import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from './search.svg';
import MusicList from '../music-list/music-list';

import './search-bar.scss';

const API_KEY = `d95cb209c9a54fbd9f1f3497752e3b8f`;


const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [type, setType] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const updateQuery = (event) => {
        setQuery(event.target.value)
    }

    const onselect = (e) => {
        const { value } = e.target;
        setType(value)
    }

    const onSubmit = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/?q=${type}:${query}&apiKey=${API_KEY}`, {
            method: 'GET'
        })
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                setSearchResults(jsonResponse.data)
                console.log(searchResults)
            })
    }

    return (
        <div>
            <div className='search-container'>
                <SearchIcon className='icon' />
                <input
                    type='text'
                    placeholder='Search for songs, artists...'
                    onChange={updateQuery}
                />
                <select onChange={onselect} id="selectElement">
                    <option value="0">Search By</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="track">Song</option>
                </select>
                <button onClick={onSubmit}>Search</button>
            </div >
            <MusicList
                search={searchResults}
            />
        </div>
    )
};

export default SearchBar;