import { FETCH_SEARCH_START, FETCH_SEARCH_END, FETCH_CURRENT_SONG, HANDLE_PAUSE_OR_PLAY, IS_CURRENT_SONG_PAUSED } from '../types/songs';

const INITIAL_STATE = {
    searchResults: [],
    currentSong: '',
    handlePauseOrPlay: null,
    isCurrentSongPaused: true
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

        default:
            return state
    }
}