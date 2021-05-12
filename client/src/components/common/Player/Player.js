import React, { useCallback, useContext } from 'react';
import { useSelector } from "react-redux";
import useTimer from "@hooks/player/timer.hook";
import PlayerContext from "@contexts/PlayerContext";
import Slider from "@components/common/Player/Slider";
import styles from '@styles/common/player/player.css';
import playIcon from '@resources/icons/play.svg';
import pauseIcon from '@resources/icons/pause.svg';
import nextIcon from '@resources/icons/next.svg';
import prevIcon from '@resources/icons/prev.svg';
import repeatIcon from '@resources/icons/repeat.svg';
import heartIcon from '@resources/icons/heart.svg';

const src = 'https://sun9-61.userapi.com/impf/c857732/v857732430/1f071c/w2iOhqwg-hQ.jpg?size=300x300&quality=96&sign=c6ce93f2721e862db2a6af2f9cc1bca8&type=audio';

function Player() {

    const { play, pause, next, prev, replay, audio } = useContext(PlayerContext);
    const { isPlayed } = useSelector(state => state.player);
    const { currentTime, setCurrentTime, timer } = useTimer(audio);

    const toggleHandler = useCallback(async () => {
        if (!isPlayed) {
            play();
            return timer();
        }
        return pause();
    }, [isPlayed]);

    return (
        <div className={styles.player}>
            <div className={styles.bar}>
                <img
                    className={styles.switch}
                    src={prevIcon}
                    onClick={prev}
                    alt=""
                />
                <img
                    className={styles.playerIcon}
                    src={isPlayed ? pauseIcon : playIcon}
                    onClick={toggleHandler}
                    alt=""
                />
                <img
                    className={styles.switch}
                    src={nextIcon}
                    onClick={next}
                    alt=""
                />
                <img className={styles.cover} src={src} alt=""/>
                <div className={styles.container}>
                    <span className={styles.title}>Танцуй</span>
                    <span className={styles.creator}>Кис-кис</span>
                </div>
            </div>
            <Slider currentTime={currentTime} setCurrentTime={setCurrentTime}/>
            <div className={styles.bar}>
                <img
                    className={styles.playerIcon}
                    src={repeatIcon}
                    onClick={replay}
                    alt=""/>
                <img className={styles.playerIcon} src={heartIcon} alt=""/>
            </div>
        </div>
    );
}

export default Player;