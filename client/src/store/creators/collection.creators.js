import { ADD_TRACK, DELETE_TRACK, SET_COLLECTION } from "@store/actions/collection.actions";

const setCollection = (collection) => {
    return {
        type: SET_COLLECTION,
        collection: collection
    };
};

const addTrack = (track) => {
    return {
        type: ADD_TRACK,
        track: track
    };
};

const deleteTrack = (id) => {
    return {
        type: DELETE_TRACK,
        id: id
    };
};

export {
    setCollection,
    addTrack,
    deleteTrack
};