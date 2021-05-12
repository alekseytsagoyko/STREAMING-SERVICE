import React from 'react';
import TrackList from "@components/main/content/tracks/TrackList";
import styles from '@styles/main/content/tracks/tracks.css';

function Tracks() {
    return (
        <div className={styles.tracks}>
            <TrackList />
        </div>
    );
}

export default Tracks;