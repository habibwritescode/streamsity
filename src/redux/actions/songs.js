import {
    FETCH_SEARCH_END,
    FETCH_CURRENT_SONG,
    HANDLE_PAUSE_OR_PLAY,
    IS_CURRENT_SONG_PAUSED,
    IS_FETCHING
} from '../types/songs';


export function fetchSongs(songs) {
    return {
        type: FETCH_SEARCH_END,
        payload: songs
    }
}


export function fetchCurrentSong(currentSongObj) {
    return {
        type: FETCH_CURRENT_SONG,
        payload: currentSongObj
    }
}

export function handlePauseOrPlay(func) {
    return {
        type: HANDLE_PAUSE_OR_PLAY,
        payload: func
    }
}

export function isCurrentSongPaused(bool) {
    return {
        type: IS_CURRENT_SONG_PAUSED,
        payload: bool
    }
}

export function isFetching(bool) {
    return {
        type: IS_FETCHING,
        payload: bool
    }
}