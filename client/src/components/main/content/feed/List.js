import React from 'react';
import { useSelector } from "react-redux";
import Header from "@components/main/content/feed/Header";
import Post from "@components/common/Post";
import styles from '@styles/main/content/feed/list.css';

function List() {

    const { posts } = useSelector((state) => (state));

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.list}>
                {posts.map((item, index) => {
                    return (
                        <div key={index}>
                            <Post post={item}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default List;