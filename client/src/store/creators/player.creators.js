import { SET_ID, SET_LIST, SET_PLAYBACK } from "@store/actions/player.actions";

const setId = (id) => {
    return {
        type: SET_ID,
        payload: id
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

export { setId, setList, setPlayback };