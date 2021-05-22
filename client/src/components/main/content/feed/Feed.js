import React from 'react';
import List from "@components/main/content/feed/List";
import FollowBar from "@components/common/FollowBar";
import styles from '@styles/main/content/feed/feed.css';
import PublishBar from "@components/common/PublishBar";

function Feed() {
    return (
        <div className={styles.feed}>
            <List/>
            {/*<FollowBar />*/}
            <PublishBar />
        </div>
    );
}

export default Feed;