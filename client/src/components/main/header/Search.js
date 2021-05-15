import React from 'react';
import { useDispatch } from "react-redux";
import { filterCollection } from "@store/creators/collection.creators";
import styles from '@styles/main/header/search.css';

function Search() {

    const dispatch = useDispatch();

    const findHandler = (e) => {
        dispatch(filterCollection(e.target.value));
    };

    return (
        <div className={styles.search}>
            <input
                className={styles.input}
                type="text"
                onChange={findHandler}
                placeholder="Поиск"
            />
        </div>
    );
}

export default Search;