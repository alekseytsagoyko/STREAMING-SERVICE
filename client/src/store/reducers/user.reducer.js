import { SET_IMAGE, SET_STATUS, SET_USER, SET_USERNAME } from "@store/actions/user.actions";

const initialState = {
    username: '',
    status: '',
    image: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...action.user };
        case SET_USERNAME:
            return { ...state, username: action.username };
        case SET_STATUS:
            return { ...state, status: action.status };
        case SET_IMAGE:
            return { ...state, image: action.image };
        default:
            return state;
    }
};

export default userReducer;