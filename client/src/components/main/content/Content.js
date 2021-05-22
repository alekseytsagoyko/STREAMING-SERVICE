import React from "react";
import { useRoutes } from 'hookrouter';
import Feed from "@components/main/content/feed/Feed";
import Profile from "@components/main/content/profile/Profile";
import Tracks from "@components/main/content/tracks/Tracks";
import Publish from "@components/main/content/publish/Publish";
import Settings from "@components/main/content/settings/Settings";
import Playlists from "@components/main/content/playlists/Playlists";
import styles from '@styles/main/content/content.css';
import Playlist from "@components/main/content/playlists/Playlist";

const routes = {
    'tracks': () => <Tracks/>,
    'feed': () => <Feed/>,
    'profile/:id*': ({ id }) => <Profile id={id}/>,
    'publish': () => <Publish />,
    'settings': () => <Settings />,
    'playlists': () => <Playlists />,
    'playlist/:id': ({id}) => <Playlist id={id} />
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