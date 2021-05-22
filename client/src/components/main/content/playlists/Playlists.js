import React, { useContext, useEffect, useState } from 'react';
import { navigate } from 'hookrouter';
import styles from '@styles/main/content/playlists/playlists.css';
import useHttp from "@hooks/http/http.hook";
import AuthContext from "@contexts/AuthContext";
import { useSelector } from "react-redux";

const src = 'https://pbs.twimg.com/media/DSzZAvrVAAAHL2h.jpg';

function Playlists() {

    const { request } = useHttp();
    const { id } = useContext(AuthContext);
    const [playlists, setPlaylists] = useState([]);
    const { user } = useSelector((state) => state);

    const addPlaylist = async () => {
        console.log('click');
        const body = { id };
        const data = await request('/playlists/add', 'POST', body);
        setPlaylists((prev) => {
            prev.push(data);
            return [...prev];
        });
    };

    useEffect(async () => {
        const data = await request(`/playlists/user/${id}`);
        setPlaylists(data);
    }, []);

    return (
        <div className={styles.playlists}>
            <div className={styles.header}>
                <span className={styles.title}>Плейлисты</span>
                <div className={styles.stat}>
                    <span className={styles.count}>
                        Количество <div className={styles.counter}>{0}</div>
                    </span>
                    <button
                        className={styles.button}
                        onClick={addPlaylist}
                    >
                        Добавить
                    </button>
                </div>
            </div>
            <div className={styles.container}>
                {playlists.map((item) => {
                    return (
                        <div
                            className={styles.playlist}
                            key={item._id}
                            onClick={() => navigate(`/playlist/${item._id}`)}
                        >
                            <img
                                className={styles.img}
                                src={item.image}
                                alt=""
                            />
                            <span className={styles.name}>
                                {item.title}
                            </span>
                            <span className={styles.creator}>
                                {user.username}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Playlists;