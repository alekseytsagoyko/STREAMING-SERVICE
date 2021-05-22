import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { navigate } from 'hookrouter';
import AuthContext from "@contexts/AuthContext";
import styles from '@styles/main/sidebar/details.css';

const src = 'https://sun9-45.userapi.com/impg/fBcf0G8uuYr-3jktW58qAnKajQY3UhTJkB280g/T0guP58CSJs.jpg?size=1620x2160&quality=96&sign=d9d97151cb85087dab3b8391637c888c&type=album';

function Details() {

    const { user } = useSelector((state) => state);
    const { id } = useContext(AuthContext);

    const redirect = () => {
        navigate(`/profile/${id}`);
    };

    return (
        <div className={styles.details} onClick={redirect}>
            <img className={styles.avatar} src={user.image} alt=""/>
            <div className={styles.container}>
                <span className={styles.name}>{user.username}</span>
                <span className={styles.status}>{user.status}</span>
            </div>
        </div>
    );
}

export default Details;