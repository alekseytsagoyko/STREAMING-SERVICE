import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import PlayerContext from "@contexts/PlayerContext";
import Track from "@components/common/Track";
import Stats from "@components/main/content/profile/Stats";
import styles from '@styles/main/content/profile/tracks.css';

function ProfileTracks() {

    const { play } = useContext(PlayerContext);
    const { tracks } = useSelector((state) => state.profile);

    return (
        <div className={styles.tracks}>
            <div className={styles.list}>
                {tracks?.map((track) => {
                    return (
                        <div
                            className={styles.track}
                            key={track._id}
                            onClick={() => play(track._id)}
                        >
                            <Track track={track}/>
                        </div>
                    );
                })}
            </div>
            <Stats/>
        </div>
    );
}

export default ProfileTracks;