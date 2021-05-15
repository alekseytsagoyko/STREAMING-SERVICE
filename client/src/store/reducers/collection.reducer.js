import { ADD_TRACK, DELETE_TRACK, SET_COLLECTION } from "@store/actions/collection.actions";

const collectionReducer = (state = [], action) => {
    switch (action.type) {
        case SET_COLLECTION:
            return action.collection;
        case ADD_TRACK:
            state.push(action.track);
            return [...state];
        case DELETE_TRACK:
            const id = state.findIndex((track) => (track._id == action.id));
            state.splice(id, 1);
            return [...state]
        default:
            return state;
    }
};

export default collectionReducer;