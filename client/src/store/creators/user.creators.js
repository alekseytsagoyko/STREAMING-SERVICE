import { SET_IMAGE, SET_STATUS, SET_USER, SET_USERNAME } from "@store/actions/user.actions";

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
}

const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        username
    };
}

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    };
}

const setImage = (image) => {
    return {
        type: SET_IMAGE,
        image
    };
}

export { setUser, setUsername, setStatus, setImage };