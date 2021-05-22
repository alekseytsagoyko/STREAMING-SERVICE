import React from 'react';
import Post from "@components/common/Post";
import Stats from "@components/main/content/profile/Stats";
import styles from '@styles/main/content/profile/posts.css';
import { useSelector } from "react-redux";

function ProfilePosts() {

    const { posts } = useSelector((state) => (state.profile));

    return (
        <div className={styles.posts}>
            <div className={styles.list}>
                {posts?.map((item) => {
                    return (
                        <div key={item?.track?._id}>
                            <Post post={item}/>
                        </div>
                    );
                })}
            </div>
            <Stats/>
        </div>
    );
}

export default ProfilePosts;