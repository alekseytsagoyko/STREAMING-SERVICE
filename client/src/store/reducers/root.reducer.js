import { combineReducers } from "redux";
import playerReducer from "@store/reducers/player.reducer";

const rootReducer = combineReducers({
    player: playerReducer
});

export default rootReducer;