import { createContext } from "react";

const func = () => {
};

const PlayerContext = createContext({
    audio: null,
    play: func,
    pause: func,
    next: func,
    prev: func,
    replay: func
});

export default PlayerContext;