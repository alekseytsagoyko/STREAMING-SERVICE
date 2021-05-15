import { combineReducers } from "redux";
import playerReducer from "@store/reducers/player.reducer";
import collectionReducer from "@store/reducers/collection.reducer";

const rootReducer = combineReducers({
    player: playerReducer,
    collection: collectionReducer
});

export default rootReducer;