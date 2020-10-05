import { FETCH_SEARCH_START, FETCH_SEARCH_END, FETCH_CURRENT_SONG } from '../types/searchResults';

export function fetchSongStart() {
    return {
        type: FETCH_SEARCH_START
    }
}

export function fetchSongEnd(songs) {
    return {
        type: FETCH_SEARCH_END,
        payload: songs
    }
}

export function fetchCurrentSong(songObj) {
    return {
        type: FETCH_CURRENT_SONG,
        payload: songObj
    }
}