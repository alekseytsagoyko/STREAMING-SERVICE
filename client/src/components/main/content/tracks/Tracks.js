import React from 'react';
import TrackList from "@components/main/content/tracks/TrackList";
import PublishBar from "@components/common/PublishBar";
import styles from '@styles/main/content/tracks/tracks.css';

function Tracks() {
    return (
        <div className={styles.tracks}>
            <TrackList />
            <PublishBar />
        </div>
    );
}

export default Tracks;