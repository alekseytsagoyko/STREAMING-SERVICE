import { combineReducers } from "redux";
import playerReducer from "@store/reducers/player.reducer";
import collectionReducer from "@store/reducers/collection.reducer";
import postsReducer from "@store/reducers/posts.reducer";
import profileReducer from "@store/reducers/profile.reducer";
import userReducer from "@store/reducers/user.reducer";

const rootReducer = combineReducers({
    player: playerReducer,
    collection: collectionReducer,
    posts: postsReducer,
    profile: profileReducer,
    user: userReducer
});

export default rootReducer;