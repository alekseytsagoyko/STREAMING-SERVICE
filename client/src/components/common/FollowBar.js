import React from 'react';
import styles from '@styles/common/followBar.css';

const src = 'https://sun9-1.userapi.com/impf/c638921/v638921556/1528a/RxiURaucmyk.jpg?size=604x604&quality=96&sign=ad24c783a199d7bb558fd1404cb47253&type=album';
function FollowBar() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Артисты</span>
            <div className={styles.bar}>
                {[1,2,3].map((item, index) => {
                    return (
                        <div className={styles.item}>
                            <img className={styles.icon} src={src} alt=""/>
                            <div className={styles.description}>
                                <span className={styles.username}>username</span>
                                <span className={styles.status}>статус</span>
                            </div>
                            <div className={styles.follow}>Подп</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FollowBar;