import React from 'react';
import styles from '@styles/main/content/feed/header.css';

function Header() {
    return (
        <div className={styles.header}>
            <span className={styles.title}>Главная</span>
        </div>
    );
}

export default Header;