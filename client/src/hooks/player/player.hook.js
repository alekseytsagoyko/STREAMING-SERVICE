import { useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import useHttp from '@hooks/http/http.hook';
import useTimer from "@hooks/player/timer.hook";
import {
    setAdded,
    setCurrentTime,
    setDuration,
    setId,
    setList,
    setPlayback,
    setRepeatable,
    setTrack,
    setVolume
} from "@store/creators/player.creators";
import { addTrack, deleteTrack } from "@store/creators/collection.creators";
import store from "@store/store";

function usePlayer() {

    const { request } = useHttp();
    const audio = useRef(new Audio());
    const timer = useTimer(audio.current);
    const dispatch = useDispatch();

    const play = async (_id, _list = null) => {
        const { id, list } = store.getState().player;

        if (_id != id && _id != null) {
            const data = await request(`/tracks/${_id}`);
            const isAdded = !!store.getState().collection.find((track) => (track._id == data.track?._id));
            dispatch(setId(_id));
            dispatch(setTrack(data.track, isAdded));
            dispatch(setCurrentTime(0));
            audio.current.src = data.file;
        }

        if (_list && _list != list) {
            dispatch(setList(_list));
        }

        await audio.current.play();
        dispatch(setPlayback(true));
        dispatch(setDuration(audio.current.duration));
        return timer(_id);
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

    const repeat = () => {
        audio.current.loop = !audio.current.loop;
        dispatch(setRepeatable(audio.current.loop));
    };

    const add = async (userId) => {
        const { isAdded, id, track } = store.getState().player;
        try {
            const body = { trackId: id, userId };
            await request('/collections', 'PUT', body);
            if (isAdded) dispatch(deleteTrack(id));
            if (!isAdded) dispatch(addTrack(track));
            dispatch(setAdded(!isAdded));
        } catch (e) {
            console.log(e.message);
        }
    };

    const revolume = (value) => {
        audio.current.volume = value;
        dispatch(setVolume(value));
    };

    useEffect(() => {
        audio.current.volume = store.getState().player.volume;
        audio.current.onended = () => {
            if (!audio.current.loop) return next();
        };
    }, []);

    return { play, pause, next, prev, repeat, revolume, add, audio: audio.current };
}

export default usePlayer;