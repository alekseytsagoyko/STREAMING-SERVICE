import { createStore } from "redux";
import rootReducer from "@store/reducers/root.reducer";

const store = createStore(rootReducer);

export default store;