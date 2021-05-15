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

const initialState = {
    id: null,
    track: {},
    list: [],
    duration: 60,
    currentTime: 0,
    volume: 0.1,
    isPlayed: false,
    isRepeat: false,
    isAdded: false
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_ID):
            return { ...state, id: action.payload };
        case(SET_TRACK):
            return { ...state, track: action.track, isAdded: action.isAdded };
        case(SET_LIST):
            return { ...state, list: action.payload };
        case(SET_PLAYBACK):
            return { ...state, isPlayed: action.payload };
        case(SET_DURATION):
            return { ...state, duration: action.payload };
        case(SET_CURRENT_TIME):
            return { ...state, currentTime: action.payload };
        case(SET_VOLUME):
            return { ...state, volume: action.payload };
        case(SET_REPEATABLE):
            return { ...state, isRepeat: action.payload };
        case(SET_ADDED):
            return { ...state, isAdded: action.payload };
        case(INCREMENT_CURRENT_TIME):
            if (state.currentTime >= state.duration) {
                return { ...state, currentTime: 0 };
            }
            return { ...state, currentTime: Math.floor(state.currentTime) + 1 };
        default:
            return state;
    }
};

export default playerReducer;