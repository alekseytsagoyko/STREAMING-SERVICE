import React from 'react';
import { useSelector } from "react-redux";
import styles from "@styles/main/content/profile/stats.css";
import twitterIcon from '@resources/icons/twitter.svg';
import telegramIcon from '@resources/icons/telegram.svg';
import facebookIcon from '@resources/icons/facebook.svg';

function Stats() {

    const { posts, tracks } = useSelector((state) => (state.profile));

    return (
        <div className={styles.stats}>
            <div className={styles.score}>
                <div className={styles.item}>
                    <span className={styles.type}>Посты</span>
                    <span className={styles.value}>{posts?.length}</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.type}>Сабы</span>
                    <span className={styles.value}>0</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.type}>Треки</span>
                    <span className={styles.value}>{tracks?.length}</span>
                </div>
            </div>
            <span className={styles.description}>Какое-то описание профиля тута будет. Добавим еще немного текста чтобы понять как себя поведут стили</span>
            <div className={styles.social}>
                <div className={styles.container}>
                    <img className={styles.img} src={twitterIcon} alt=""/>
                    <span className={styles.text}>twitter/profile</span>
                </div>
                <div className={styles.container}>
                    <img className={styles.img} src={telegramIcon} alt=""/>
                    <span className={styles.text}>telegram/account</span>
                </div>
                <div className={styles.container}>
                    <img className={styles.img} src={facebookIcon} alt=""/>
                    <span className={styles.text}>facebook/feed</span>
                </div>
            </div>
        </div>
    );
}

export default Stats;