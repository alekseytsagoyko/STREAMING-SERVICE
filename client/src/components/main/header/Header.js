import React from 'react';
import Logo from '@components/main/header/Logo';
import Search from "@components/main/header/Search";
import Options from "@components/main/header/Options";
import Logout from "@components/main/header/Logout";
import Notification from "@components/main/header/Notification";
import styles from '@styles/main/header/header.css';

function Header() {
    return (
        <div className={styles.header}>
            <Logo />
            <Search />
            <Notification />
            <Options />
            <Logout />
        </div>
    );
}

export default Header;