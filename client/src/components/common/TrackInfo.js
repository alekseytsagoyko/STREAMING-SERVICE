import React from 'react';
import styles from "@styles/common/trackInfo.css";

const src = 'https://sun9-2.userapi.com/impg/MyM4ZQ-lo0U7MjtWxSjsjuNQ4GWaaEBTkBqmiA/4SshhvMKh6w.jpg?size=1080x1350&quality=96&sign=ce57fd624e2d7fd6ebb8febd9733db22&type=album';

function TrackInfo({ track }) {
    return (
        <>
            <img className={styles.cover} src={null} alt=""/>
            <div className={styles.container}>
                <span className={styles.title}>{track?.title}</span>
                <span className={styles.creator}>{track?.creator?.username}</span>
            </div>
        </>
    );
}

export default TrackInfo;