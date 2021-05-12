import React, { useContext } from 'react';
import PlayerContext from "@contexts/PlayerContext";
import styles from "@styles/common/player/slider.css";

//Создается ли эта функция при каждом рендере
function convert(duration) {
    if(!!duration) {
        let minutes = Math.floor(duration / 60);
        let seconds = Math.floor(duration - minutes * 60);
        if(String(seconds).length == 1) {
            seconds = "0" + seconds;
        }
        return `${minutes}:${seconds}`;
    }
    return '0:00';
}

function Slider({currentTime, setCurrentTime}) {

    const { audio } = useContext(PlayerContext);

    const slideHandler = (e) => {
        audio.currentTime = e.target.value;
        setCurrentTime((prev) => e.target.value);
    };

    return (
        <div className={styles.container}>
            <span>
                {convert(currentTime)}
            </span>
            <input
                className={styles.slider}
                type="range"
                min={0}
                max={!!audio.duration ? audio.duration : 0}
                value={currentTime}
                step={1}
                onChange={slideHandler}
            />
            <span>
                {convert(audio.duration)}
            </span>
        </div>
    );
}

export default Slider;