import React from 'react';
import Details from "@components/main/sidebar/Details";
import Nav from "@components/main/sidebar/Nav/Nav";
import styles from '@styles/main/sidebar/sidebar.css';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Details />
            <Nav />
        </div>
    );
}

export default Sidebar;