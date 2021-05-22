import React from 'react';
import convert from '~/helpers/convert';
import styles from '@styles/common/track.css';

function Track({ track }) {

    return (
        <>
            <div className={styles.info}>
                <span className={styles.title}>{track?.title}</span>
                <span className={styles.creator}>{track?.creator?.username}</span>
            </div>
            <span className={styles.duration}>{convert(track?.duration)}</span>
        </>
    );
}

export default Track;