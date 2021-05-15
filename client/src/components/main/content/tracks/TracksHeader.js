import React from 'react';
import styles from '@styles/main/content/tracks/header.css';

function TracksHeader({ count }) {
    return (
        <div className={styles.header}>
            <span className={styles.title}>Мои аудиозаписи</span>
            <div className={styles.container}>
                <span className={styles.description}>Количество</span>
                <div className={styles.counter}>{count}</div>
                <div className={styles.sort}></div>
            </div>
        </div>
    );
}

export default TracksHeader;