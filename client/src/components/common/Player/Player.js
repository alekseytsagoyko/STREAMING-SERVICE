import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import PlayerContext from "@contexts/PlayerContext";
import Slider from "@components/common/Player/Slider";
import Volume from "@components/common/Player/Volume";
import styles from '@styles/common/player/player.css';
import playIcon from '@resources/icons/play.svg';
import pauseIcon from '@resources/icons/pause.svg';
import nextIcon from '@resources/icons/next.svg';
import prevIcon from '@resources/icons/prev.svg';
import repeatIcon from '@resources/icons/repeat.svg';
import heartIcon from '@resources/icons/heart.svg';
import TrackInfo from "@components/common/TrackInfo";
import AuthContext from "@contexts/AuthContext";

const src = 'https://sun9-61.userapi.com/impf/c857732/v857732430/1f071c/w2iOhqwg-hQ.jpg?size=300x300&quality=96&sign=c6ce93f2721e862db2a6af2f9cc1bca8&type=audio';

//@STORE

function Player() {

    const { id } = useContext(AuthContext);
    const { play, pause, next, prev, repeat, add } = useContext(PlayerContext);
    const { isPlayed, isRepeat, isAdded, track } = useSelector(state => state.player);
    const playerRef = useRef();

    const toggleHandler = useCallback(async () => {
        if (!isPlayed) {
            return play();
        }
        return pause();
    }, [isPlayed]);

    return (
        <div className={styles.player} ref={playerRef}>
            <div className={styles.leftBar}>
                <div className={styles.container}>
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
                </div>
                <div className={styles.container}>
                    <img
                        className={`${styles.playerIcon} ${isRepeat ? styles.active : null}`}
                        src={repeatIcon}
                        onClick={repeat}
                        alt=""/>
                    <img
                        className={`${styles.playerIcon} ${isAdded ? styles.active : null}`}
                        src={heartIcon}
                        onClick={() => (add(id))}
                        alt=""/>
                    <Volume/>
                </div>
            </div>
            <Slider/>
            <div className={styles.rightBar}>
                <TrackInfo track={track}/>
            </div>
        </div>
    );
}

export default Player;