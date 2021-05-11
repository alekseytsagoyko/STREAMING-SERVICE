import React from 'react';
import styles from '@styles/main/header/search.css';

function Search() {
    return (
        <div className={styles.search}>
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск"
            />
        </div>
    );
}

export default Search;