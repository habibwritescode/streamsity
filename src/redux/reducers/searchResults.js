import { FETCH_SEARCH_START, FETCH_SEARCH_END, FETCH_CURRENT_SONG } from '../types/searchResults';

const INITIAL_STATE = {
    searchResults: [],
    currentSong: ''
}

export default function songs(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SEARCH_END:
            return {
                ...state,
                searchResults: action.payload
            }
            case FETCH_CURRENT_SONG:
                return{
                    ...state,
                    currentSong: action.payload
                }
        default:
            return state
    }
}