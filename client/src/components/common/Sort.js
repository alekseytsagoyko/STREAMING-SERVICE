import React from 'react';
import styles from '@styles/common/sort.css';
import sortIcon from '@resources/icons/sort.svg';

function Sort({ items }) {
    return (
        <>
            <div className={styles.sort}>
                <div className={styles.select}>
                    <img className={styles.icon10} src={sortIcon} alt=""/>
                    <span>Отсортировать</span>
                </div>
                <div className={styles.list}>
                    {items.map((item, index) => {
                        return (
                            <span key={index} onClick={item.callback}>
                                {item.value}
                            </span>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Sort;