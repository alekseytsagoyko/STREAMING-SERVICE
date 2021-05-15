import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import PlayerContext from "@contexts/PlayerContext";
import styles from "@styles/common/player/volume.css";
import volumeIcon from "@resources/icons/volume.svg";

function Volume() {

    const { revolume } = useContext(PlayerContext);
    const { volume } = useSelector(state => state.player);

    const volumeHandler = (e) => {
        revolume(e.target.value);
    };

    return (
        <div className={styles.volume}>
            <div className={styles.container}>
                <input
                    className={styles.slider}
                    type="range"
                    min={0}
                    max={1}
                    value={volume}
                    step={0.01}
                    onChange={volumeHandler}
                />
            </div>
            <img className={styles.playerIcon}
                 src={volumeIcon}
                 alt=""/>
        </div>
    );
}

export default Volume;