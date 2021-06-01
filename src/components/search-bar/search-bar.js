import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import { ReactComponent as SearchIcon } from './search.svg';
import { fetchSongs, isFetching } from '../../redux/actions/songs';


import './search-bar.scss';

const API_KEY = `d95cb209c9a54fbd9f1f3497752e3b8f`;


const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation();
    const updateQuery = (event) => {
        setQuery(event.target.value)
    }

    useEffect(() => {
        if (query.trim().length < 1) return;
        dispatch(isFetching(true))
        fetch(`https://habib-cors.herokuapp.com/https://api.deezer.com/search/?q=${query.trim()}&apiKey=${API_KEY}`, {
            method: 'GET'
        })
            .then(response => {
                if (location.pathname !== '/search') {
                    history.push('/search')
                }
                return response.json()
            })
            .then(jsonResponse => {
                dispatch(fetchSongs(jsonResponse.data))
                dispatch(isFetching(false))
            })
    }, [query])

    return (
        <div className='search-container'>
            <SearchIcon className='icon' />
            <input
                type='text'
                placeholder='Search for songs, artists...'
                onChange={updateQuery}
            />
        </div >
    )
};

export default SearchBar;