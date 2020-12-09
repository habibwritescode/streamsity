import {FETCH_SEARCH_END, FETCH_CURRENT_SONG, HANDLE_PAUSE_OR_PLAY, IS_CURRENT_SONG_PAUSED, IS_FETCHING } from '../types/songs';

const INITIAL_STATE = {
    searchResults: [],
    currentSong: '',
    handlePauseOrPlay: null,
    isCurrentSongPaused: true,
    isFetching: false
}

export default function songs(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SEARCH_END:
            return {
                ...state,
                searchResults: action.payload
            }
        case FETCH_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.payload
            }
        case HANDLE_PAUSE_OR_PLAY:
            return {
                ...state,
                handlePauseOrPlay: action.payload
            }
        case IS_CURRENT_SONG_PAUSED:
            return {
                ...state,
                isCurrentSongPaused: action.payload
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}