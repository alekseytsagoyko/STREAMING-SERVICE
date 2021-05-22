import { SET_PROFILE, SET_SUBSCRIPTION } from "@store/actions/profile.actions";

const setProfile = (data) => {
    return {
        type: SET_PROFILE,
        data
    };
};

const setSubscription = (isSubscribe) => {
    return {
        type: SET_SUBSCRIPTION,
        isSubscribe
    };
};

export { setProfile, setSubscription };