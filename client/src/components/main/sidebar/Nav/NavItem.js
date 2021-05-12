import React from 'react';
import { navigate } from 'hookrouter';
import styles from '@styles/main/sidebar/nav.css';

function NavItem({ icon, value, url, children }) {
    return (
        <div className={styles.item} onClick={() => navigate(url)}>
            <img className={styles.icon} src={icon} alt=""/>
            <span className={styles.value}>{value}</span>
            {children}
        </div>
    );
}

export default NavItem;