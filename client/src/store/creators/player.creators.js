import {
    INCREMENT_CURRENT_TIME,
    SET_ADDED,
    SET_CURRENT_TIME,
    SET_DURATION,
    SET_ID,
    SET_LIST,
    SET_PLAYBACK,
    SET_REPEATABLE,
    SET_TRACK,
    SET_VOLUME
} from "@store/actions/player.actions";

const setId = (id) => {
    return {
        type: SET_ID,
        payload: id
    };
};

const setTrack = (track, isAdded) => {
    return {
        type: SET_TRACK,
        track,
        isAdded
    };
};

const setList = (list) => {
    return {
        type: SET_LIST,
        payload: list
    };
};

const setPlayback = (isPlayed) => {
    return {
        type: SET_PLAYBACK,
        payload: isPlayed
    };
};

const setDuration = (duration) => {
    return {
        type: SET_DURATION,
        payload: duration
    };
};

const setCurrentTime = (currentTime) => {
    return {
        type: SET_CURRENT_TIME,
        payload: currentTime
    };
};

const setVolume = (volume) => {
    return {
        type: SET_VOLUME,
        payload: volume
    };
};

const incrementCurrentTime = () => {
    return {
        type: INCREMENT_CURRENT_TIME
    };
};

const setRepeatable = (isRepeat) => {
    return {
        type: SET_REPEATABLE,
        payload: isRepeat
    };
};

const setAdded = (isAdded) => {
    return {
        type: SET_ADDED,
        payload: isAdded
    };
};

export {
    setId,
    setList,
    setPlayback,
    setDuration,
    setCurrentTime,
    setVolume,
    setRepeatable,
    setAdded,
    incrementCurrentTime,
    setTrack
};