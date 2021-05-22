import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { incrementCurrentTime } from "@store/creators/player.creators";
import store from "@store/store";

function useTimer(audio) {
    const dispatch = useDispatch();

    const timer = useCallback((_id) => {
        setTimeout(() => {
            if (!audio.paused) {
                const { id } = store.getState().player;
                if (_id == id) {
                    dispatch(incrementCurrentTime());
                    return timer(_id);
                }
            }
        }, 1000);
    }, []);

    return timer;
}

export default useTimer;