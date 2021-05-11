import React from 'react';
import styles from '@styles/main/sidebar/details.css';

const src = 'https://sun9-45.userapi.com/impg/fBcf0G8uuYr-3jktW58qAnKajQY3UhTJkB280g/T0guP58CSJs.jpg?size=1620x2160&quality=96&sign=d9d97151cb85087dab3b8391637c888c&type=album';

function Details() {
    return (
        <div className={styles.details}>
            <img className={styles.avatar} src={src} alt=""/>
            <div className={styles.container}>
                <span className={styles.name}>Lyohik</span>
                <span className={styles.status}>Делаю диплоум</span>
            </div>
        </div>
    );
}

export default Details;