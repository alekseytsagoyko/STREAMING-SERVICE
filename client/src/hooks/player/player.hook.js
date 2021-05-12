import { useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import useHttp from '@hooks/http/http.hook';
import { setId, setList, setPlayback } from "@store/creators/player.creators";
import store from "@store/store";

//@Колбэки не нужны, ибо они итак обновляются при каждом рендере
//Исключение - pause
//@Чтобы не вызывался ререндер, заюзал REDUX - костыль

function usePlayer() {

    const { request } = useHttp();
    const audio = useRef(new Audio());
    const dispatch = useDispatch();

    const play = async (_id = 'def6c74bf2fae2', _list = null) => {
        const { id, list } = store.getState().player;

        if (_id != id || _id == null) {
            dispatch(setId(_id));
            const data = await request(`/tracks/${_id}`);
            audio.current.src = data.file;
            audio.current.volume = 0.1;
        }

        if (_list && _list != list) {
            dispatch(setList(_list));
        }

        dispatch(setPlayback(true));
        return audio.current.play();
    };

    const pause = () => {
        dispatch(setPlayback(false));
        return audio.current.pause();
    };

    const next = () => {
        const { id, list } = store.getState().player;

        if (!list) return;

        const _id = list.findIndex((item) => (item === id));
        if (_id < list.length - 1) return play(_id + 1);
        return play(list[0]);
    };

    const prev = () => {
        const { id, list } = store.getState().player;

        if (!list) return;

        const _id = list.findIndex((item) => (item === id));
        if (_id > 0) return play(_id - 1);
        return play(list[list.length - 1]);
    };

    const replay = () => {
        audio.current.loop = !audio.current.loop;
    };

    useEffect(() => {
        audio.current.onended = () => {
            if(!audio.current.loop) return next();
        };
    }, []);

    return { play, pause, next, prev, replay, audio: audio.current };
}

export default usePlayer;