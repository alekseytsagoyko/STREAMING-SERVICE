import React from 'react';
import { useSelector } from "react-redux";
import TracksHeader from "@components/main/content/tracks/TracksHeader";
import TrackItem from "@components/main/content/tracks/TrackItem";
import styles from '@styles/main/content/tracks/tracks.css';

function TrackList() {

    const { tracks } = useSelector(state => state.collection);

    return (
        <div className={styles.container}>
            <TracksHeader count={tracks.length}/>
            <div className={styles.list}>
                {tracks.map((track) => {
                    return <TrackItem key={track._id} track={track}/>;
                })}
            </div>
        </div>
    );
}

export default TrackList;