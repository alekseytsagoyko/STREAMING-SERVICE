import React from 'react';
import styles from '@styles/main/sidebar/nav.css';

function NavItem({ icon, value, children }) {
    return (
        <div className={styles.item}>
            <img className={styles.icon} src={icon} alt=""/>
            <span className={styles.value}>{value}</span>
            {children}
        </div>
    );
}

export default NavItem;