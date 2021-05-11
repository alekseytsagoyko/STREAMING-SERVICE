import React from 'react';
import styles from '@styles/main/header/notification.css';
import notificationIcon from '@resources/icons/notification.svg';

function Notification() {
    return (
        <div className={styles.notification}>
            <div className={styles.container}>
                <img
                    className={styles.icon}
                    src={notificationIcon}
                    alt="Оповещения"
                />
            </div>
        </div>
    );
}

export default Notification;