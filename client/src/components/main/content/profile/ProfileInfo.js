import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import useHttp from "@hooks/http/http.hook";
import AuthContext from "@contexts/AuthContext";
import { setSubscription } from "@store/creators/profile.creators";
import styles from '@styles/main/content/profile/info.css';

const src = 'https://sun9-45.userapi.com/impg/fBcf0G8uuYr-3jktW58qAnKajQY3UhTJkB280g/T0guP58CSJs.jpg?size=1620x2160&quality=96&sign=d9d97151cb85087dab3b8391637c888c&type=album';

function ProfileInfo({ id }) {

    const { profile } = useSelector((state) => (state));
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const dispatch = useDispatch();

    const subscribe = async () => {
        try {
            const body = {
                id: auth.id,
                userId: id
            };
            await request('/subscribe', 'POST', body);
            dispatch(setSubscription(!profile.isSubscribe));
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className={styles.info}>
            <img className={styles.img} src={profile.image} alt=""/>
            <div className={styles.container}>
                <div className={styles.user}>
                    <span className={styles.username}>{profile.username}</span>
                    {profile.isSubscribe ? (
                        <button className={styles.unfollow} onClick={subscribe}>Отписаться</button>
                    ) : (
                        <button className={styles.follow} onClick={subscribe}>Подписаться</button>
                    )}
                </div>
                <span className={styles.status}>
                    {profile.status}
                </span>
            </div>
        </div>
    );
}

export default ProfileInfo;