import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '@styles/main/content/playlists/playlist.css';
import useHttp from "@hooks/http/http.hook";
import AuthContext from "@contexts/AuthContext";
import TrackInfo from "@components/common/TrackInfo";
import convert from '~/helpers/convert';
import PlayerContext from "@contexts/PlayerContext";
import { useSelector } from "react-redux";
import { navigate } from 'hookrouter';

const src = 'https://pbs.twimg.com/media/DSzZAvrVAAAHL2h.jpg';

function Playlist({ id }) {

    const [tracks, setTracks] = useState([]);
    const [list, setList] = useState([]);
    const [playlist, setPlaylist] = useState({});
    const [addition, setAddition] = useState(false);
    const [editable, setEditable] = useState(false);
    const { user } = useSelector((state) => state);
    const auth = useContext(AuthContext);
    const { play } = useContext(PlayerContext);
    const { request } = useHttp();
    ;
    const fileInput = useRef();

    const changeImage = () => {
        fileInput.current.click();
    };

    const changeTitle = (e) => {
        setPlaylist((prev) => {
            console.log({ ...prev });
            return {
                ...prev,
                title: e.target.value
            };
        })
    };

    const addTrack = async (_id) => {
        try {
            const body = { trackId: _id, playlistId: id };
            const track = tracks.find((item) => item._id == _id);
            await request('/playlists/addtrack', 'POST', body);
            setList((prev) => {
                prev.push(track);
                return [...prev];
            });
            setTracks((prev) => {
                const index = prev.findIndex((item) => item._id == _id);
                prev.splice(index, 1);
                return [...prev];
            });
        } catch (e) {
            console.log(e.message);
        }
    };

    const updatePlaylist = () => {
        try {
            console.log(playlist);
            let data = new FormData();
            data.append('id', playlist.id);
            data.append('title', playlist.title);
            if (fileInput.current.files[0]) {
                data.append('image', fileInput.current.files[0]);
            }
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", "http://localhost:3000/playlists/update");
            xhr.setRequestHeader('Authorization', 'Bearer ' + auth.token);
            xhr.send(data);
        } catch (e) {
            console.log('error');
            console.log(e.message);
        }
    };

    const deletePlaylist = async () => {
        try {
            await request(`/playlists/delete/${id}`, 'DELETE');
            navigate('/playlists');
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(async () => {
        try {
            if (addition) {
                const data = await request(`/playlists/tracks/${id}`);
                return setTracks(data);
            }
            const data = await request(`/playlists/${id}`);
            setList(data.tracks);
            setPlaylist(data.playlist);
            return;
        } catch (e) {
            return console.log(e.message);
        }
    }, [addition]);

    useEffect(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPlaylist((prev) => {
                    return { ...prev, image: fileReader.result };
                });
            };
            fileReader.readAsDataURL(e.target.files[0]);
        };
        fileInput.current = input;
    }, []);

    return (
        <div className={styles.playlist}>
            <div className={styles.header}>
                <img
                    className={styles.img}
                    src={playlist.image}
                    alt=""
                    onClick={changeImage}
                />
                <div className={styles.container}>
                    {!editable ? (
                        <span
                            className={styles.name}
                            onClick={() => setEditable(!editable)}
                        >
                            {playlist.title}
                        </span>
                    ) : (
                        <div className={styles.edit}>
                            <input
                                className={styles.input}
                                value={playlist.title}
                                onChange={changeTitle}
                            />
                            <button
                                onClick={() => {
                                    updatePlaylist();
                                    setEditable(!editable);
                                }}
                                className={styles.editableButton}
                            >
                                изменить
                            </button>
                        </div>
                    )}

                    <span className={styles.creator}>{user.username}</span>
                    <span className={styles.count}>
                        Количество <div className={styles.counter}>{list.length}</div>
                    </span>
                </div>
                <button
                    className={`${styles.button} ${addition ? styles.active : null}`}
                    onClick={() => setAddition(!addition)}
                >
                    {!addition ? 'Добавить' : 'Вернуться'}
                </button>
                <button
                    className={styles.deleteButton}
                    onClick={deletePlaylist}
                >
                    Удалить
                </button>
            </div>
            {!addition ? (
                <div className={styles.list}>
                    {list.map((item) => {
                        return (
                            <div key={item._id} className={styles.item} onClick={() => play(item._id)}>
                                <TrackInfo track={item}/>
                                <div className={styles.duration}>{convert(item.duration)}</div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className={styles.add}>
                    {tracks.map((item) => {
                        return (
                            <div key={item._id} className={styles.track}>
                                <img className={styles.cover} src={item.image} alt=""/>
                                <div className={styles.container}>
                                    <span>{item.title}</span>
                                    <span>{item.creator.username}</span>
                                </div>
                                <button
                                    className={styles.addButton}
                                    onClick={() => addTrack(item._id)}
                                >
                                    Добавить
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Playlist;