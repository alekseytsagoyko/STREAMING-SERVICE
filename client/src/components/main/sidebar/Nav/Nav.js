import React from 'react';
import NavItem from "@components/main/sidebar/Nav/NavItem";
import styles from '@styles/main/sidebar/nav.css';

import feedIcon from '@resources/icons/home.svg';
import playlistIcon from '@resources/icons/playlist.svg';
import exploreIcon from '@resources/icons/explore.svg';
import messageIcon from '@resources/icons/message.svg';
import settingsIcon from '@resources/icons/settings.svg';
import albumIcon from '@resources/icons/album.svg';

const navItems = [
    {
        id: 1,
        icon: feedIcon,
        value: 'Главная',
        url: '/feed'
    },
    {
        id: 2,
        icon: playlistIcon,
        value: 'Мои аудиозаписи',
        url: '/tracks'
    },
    // {
    //     id: 3,
    //     icon: exploreIcon,
    //     value: 'Обзор',
    //     url: '/profile/60a451d092a0dd0584e55ebc'
    // },
    {
        id: 4,
        icon: albumIcon,
        value: 'Плейлисты',
        url: '/playlists'
    }
];

function Nav() {
    return (
        <div className={styles.nav}>
            {navItems.map((item) => {
                return (
                    <NavItem key={item.id} {...item} />
                );
            })}
            <hr className={styles.hr}/>
            <NavItem icon={messageIcon} value={'Сообщения'}>
                <div className={styles.counter}>1</div>
            </NavItem>
            <NavItem icon={settingsIcon} value={'Настройки'} url={'/settings'}/>
            <div className={styles.signature}>
                Itaque earum rerum hic tenetur a sapiente delectus, quia voluptas sit.
            </div>
        </div>
    );
}

export default Nav;