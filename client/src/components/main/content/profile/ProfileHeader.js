import React from 'react';
import ProfileInfo from "@components/main/content/profile/ProfileInfo";
import ProfileNav from "@components/main/content/profile/ProfileNav";
import styles from '@styles/main/content/profile/header.css';

function ProfileHeader({id}) {
    return (
        <div className={styles.header}>
            <ProfileInfo id={id} />
            <ProfileNav id={id} />
        </div>
    );
}

export default ProfileHeader;