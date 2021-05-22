import React from 'react';
import { navigate } from 'hookrouter';
import styles from '@styles/common/publishBar.css';

function PublishBar() {

    const publish = () => {
        navigate('/publish');
    };

    return (
        <div className={styles.publish}>
            <span className={styles.title}>
                Опубликуйте свою композицию. Она будет видна для всех пользователей.
            </span>
            <button
                className={styles.button}
                onClick={publish}
            >
                Опубликовать
            </button>
        </div>
    );
}

export default PublishBar;