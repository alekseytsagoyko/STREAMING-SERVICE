import {
    ADD_TRACK,
    DELETE_TRACK,
    FILTER_COLLECTION,
    SET_COLLECTION,
    SORT_COLLECTION
} from "@store/actions/collection.actions";

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

const sortCollection = (prop, innerProp) => {
    return {
        type: SORT_COLLECTION,
        prop,
        innerProp
    };
};

const filterCollection = (value) => {
    return {
        type: FILTER_COLLECTION,
        value
    };
};

export {
    setCollection,
    addTrack,
    deleteTrack,
    sortCollection,
    filterCollection
};