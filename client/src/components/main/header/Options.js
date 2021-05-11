import React from 'react';
import styles from '@styles/main/header/options.css';

const src = 'https://sun9-45.userapi.com/impg/fBcf0G8uuYr-3jktW58qAnKajQY3UhTJkB280g/T0guP58CSJs.jpg?size=1620x2160&quality=96&sign=d9d97151cb85087dab3b8391637c888c&type=album';

function Options() {
    return (
        <div className={styles.profile}>
            <div className={styles.container}>
                <img className={styles.img} src={src} alt=""/>
            </div>
        </div>
    );
}

export default Options;