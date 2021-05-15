import {
    ADD_TRACK,
    DELETE_TRACK,
    FILTER_COLLECTION,
    SET_COLLECTION,
    SORT_COLLECTION
} from "@store/actions/collection.actions";
import { sortProp } from "~/helpers/sort";

const initialState = {
    buffer: [],
    tracks: []
};

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLLECTION:
            const collection = action.collection;
            return { buffer: [...collection], tracks: collection };
        case ADD_TRACK:
            state.tracks.push(action.track);
            return { buffer: [...state], tracks: state };
        case DELETE_TRACK:
            const id = state.tracks.findIndex((track) => (track._id == action.id));
            state.tracks.splice(id, 1);
            return { buffer: [...state], tracks: state };
        case SORT_COLLECTION:
            const { prop, innerProp } = action;
            state.tracks.sort(sortProp(prop, innerProp))
            return { ...state, tracks: state.tracks };
        case FILTER_COLLECTION:
            let filteredTracks = state.buffer.filter((track) => {
                if (track.title.includes(action.value)) return true;
                return !!track.creator.username.includes(action.value);
            });
            return { ...state, tracks: filteredTracks };
        default:
            return state;
    }
};

export default collectionReducer;