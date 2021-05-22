import React from 'react';
import styles from '@styles/main/content/publish/header.css';

function Header() {
    return (
        <div className={styles.header}>
            <span className={styles.title}>Публикация</span>
            <span className={styles.description}>
                Опубликуйте свою композицию. Она будет видна для всех пользователей. Функция удаления временно не работает.
            </span>
        </div>
    );
}

export default Header;