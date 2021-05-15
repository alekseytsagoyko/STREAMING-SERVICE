import React from 'react';
import styles from '@styles/main/header/logo.css';

function Logo() {
    return (
        <div className={styles.logo}>
            <div className={styles.span}>
                Soundy{/*<div className={styles.colored}>y</div>*/}
            </div>
        </div>
    );
}

export default Logo;