import React, { useContext } from 'react';
import AuthContext from "@contexts/AuthContext";
import styles from '@styles/main/header/logout.css';
import logoutImg from '@resources/icons/logout.svg';

function Logout() {
    const { logout } = useContext(AuthContext);

    return (
        <div className={styles.logout}>
            <div className={styles.container} onClick={logout}>
                <img
                    className={styles.icon}
                    src={logoutImg}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Logout;