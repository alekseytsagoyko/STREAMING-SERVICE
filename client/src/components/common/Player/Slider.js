import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PlayerContext from "@contexts/PlayerContext";
import convert from '~/helpers/convert';
import { setCurrentTime } from '@store/creators/player.creators';
import styles from "@styles/common/player/slider.css";

function progress(ref, currentTime, duration) {
    return ref.current.style.width = currentTime / duration * 275 + 'pt';
}

function  Slider() {

    const { audio } = useContext(PlayerContext);
    const { currentTime, duration } = useSelector(state => state.player);
    const progressBar = useRef();
    const dispatch = useDispatch();

    const slideHandler = (e) => {
        audio.currentTime = e.target.value;
        dispatch(setCurrentTime(e.target.value));
    };

    useEffect(() => {
        progress(progressBar, currentTime, duration);
    }, [currentTime]);

    return (
        <div className={styles.slider}>
            <span>
                {convert(currentTime)}
            </span>
            <div className={styles.container}>
                <div ref={progressBar} className={styles.progress}>
                </div>
                <input
                    className={styles.input}
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={1}
                    onChange={slideHandler}
                />
            </div>
            <span>
                {convert(duration)}
            </span>
        </div>
    );
}

export default Slider;