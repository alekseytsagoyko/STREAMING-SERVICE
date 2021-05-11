import React from 'react';
import NavItem from "@components/main/sidebar/Nav/NavItem";
import styles from '@styles/main/sidebar/nav.css';

import feedIcon from '@resources/icons/home.svg';
import playlistIcon from '@resources/icons/playlist.svg';
import exploreIcon from '@resources/icons/explore.svg';
import messageIcon from '@resources/icons/message.svg';

const navItems = [
    {
        id: 1,
        icon: feedIcon,
        value: 'Главная'
    },
    {
        id: 2,
        icon: playlistIcon,
        value: 'Мои аудиозаписи'
    },
    {
        id: 3,
        icon: exploreIcon,
        value: 'Обзор'
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
            <div className={styles.signature}>
                Itaque earum rerum hic tenetur a sapiente delectus, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.
            </div>
        </div>
    );
}

export default Nav;