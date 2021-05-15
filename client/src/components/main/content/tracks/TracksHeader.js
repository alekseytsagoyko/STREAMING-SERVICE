import React from 'react';
import { useDispatch } from "react-redux";
import Sort from "@components/common/Sort";
import styles from '@styles/main/content/tracks/header.css';
import { sortCollection } from "@store/creators/collection.creators";

function TracksHeader({ count }) {

    const dispatch = useDispatch();

    const items = [
        {
            value: 'По названию',
            callback: () => {
                dispatch(sortCollection('title'));
            }
        },
        {
            value: 'По автору',
            callback: () => {
                dispatch(sortCollection('creator', 'username'));
            }
        },
        {
            value: 'По длительности',
            callback: () => {
                dispatch(sortCollection('duration'));
            }
        }
    ];

    return (
        <div className={styles.header}>
            <span className={styles.title}>Мои аудиозаписи</span>
            <div className={styles.container}>
                <span className={styles.description}>Количество</span>
                <div className={styles.counter}>{count}</div>
                <div className={styles.sort}>
                    <Sort items={items}/>
                </div>
            </div>
        </div>
    );
}

export default TracksHeader;