import React from "react";
import { useRoutes } from 'hookrouter';
import Player from "@components/common/Player/Player";
import Tracks from "@components/main/content/tracks/Tracks";
import styles from '@styles/main/content/content.css';
import Feed from "@components/main/content/feed/Feed";

const routes = {
    'tracks': () => <Tracks />,
    'feed': () => <Feed />
};

function Content() {
    const routeResult = useRoutes(routes);

    return (
        <div className={styles.content}>
            {routeResult || "Not found 404"}
        </div>
    );
}

export default Content;