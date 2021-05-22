import React from 'react';
import { navigate } from 'hookrouter';
import styles from '@styles/main/content/profile/nav.css';

function ProfileNav({ id }) {

    const postsClickHandler = () => {
        navigate(`/profile/${id}`);
    };

    const tracksClickHandler = () => {
        navigate(`/profile/${id}/tracks`);
    };

    return (
        <div className={styles.nav}>
            <div className={styles.item} onClick={postsClickHandler}>
                <span className={styles.type}>Посты</span>
            </div>
            <div className={styles.item} onClick={tracksClickHandler}>
                <span className={styles.type}>Треки</span>
            </div>
        </div>
    );
}

export default ProfileNav;