import React from 'react';
import { useRoutes } from 'hookrouter';
import ProfilePosts from "@components/main/content/profile/ProfilePosts";
import ProfileTracks from "@components/main/content/profile/ProfileTracks";
import styles from '@styles/main/content/profile/content.css';

const routes = {
    '/': () => <ProfilePosts />,
    '/tracks': () => <ProfileTracks />
};

function ProfileContent() {

    const routeResult = useRoutes(routes);

    return (
        <div className={styles.content}>
            {routeResult}
        </div>
    );
}

export default ProfileContent;