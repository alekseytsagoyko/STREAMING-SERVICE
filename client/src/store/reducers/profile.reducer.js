import { SET_PROFILE, SET_SUBSCRIPTION } from "@store/actions/profile.actions";

const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...action.data };
        case SET_SUBSCRIPTION:
            return { ...state, isSubscribe: action.isSubscribe };
        default:
            return state;
    }
};

export default profileReducer;