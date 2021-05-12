import { SET_ID, SET_LIST, SET_PLAYBACK } from "@store/actions/player.actions";

const initialState = {
    id: null,
    list: [],
    isPlayed: false
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_ID):
            return { ...state, id: action.payload };
        case(SET_LIST):
            return { ...state, list: action.payload };
        case(SET_PLAYBACK):
            return { ...state, isPlayed: action.payload };
        default:
            return state;
    }
};

export default playerReducer;