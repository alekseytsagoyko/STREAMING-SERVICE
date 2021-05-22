import React, { useContext, useEffect, useRef, useState } from 'react';
import useHttp from "@hooks/http/http.hook";
import { navigate } from 'hookrouter';
import AuthContext from "@contexts/AuthContext";
import styles from '@styles/main/content/publish/form.css';
import createFileInput from "~/helpers/createFileInput";

function getDuration(input, setter) {
    const src = URL.createObjectURL(input.files[0])
    const audio = new Audio();
    audio.onloadedmetadata = () => {
        setter(Math.floor(audio.duration));
        URL.revokeObjectURL(src);
    };
    audio.src = src;
}

function Form() {

    const { request } = useHttp();
    const { token, id } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [duration, setDuration] = useState(0);
    const [isPublic, setPublicity] = useState(true);
    const [imageFileName, setImageFileName] = useState('');
    const [trackFileName, setTrackFileName] = useState('');
    const imageInput = useRef();
    const trackInput = useRef();

    const uploadImage = () => (imageInput.current.click());
    const uploadTrack = () => (trackInput.current.click());

    const sendTrack = async () => {
        console.log(isPublic);
        let data = new FormData();
        data.append('id', id);
        data.append('text', text);
        data.append('title', title);
        data.append('track', trackInput.current.files[0]);
        data.append('duration', duration);
        data.append('isPublic', isPublic);
        if (imageInput.current.files[0]) {
            data.append('image', imageInput.current.files[0]);
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/posts/add");
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.send(data);
        navigate('/feed');
    };

    useEffect(() => {
        createFileInput(setImageFileName, imageInput);
        createFileInput(setTrackFileName, trackInput, setDuration);
    }, []);

    return (
        <div className={styles.form}>
            <div className={styles.container}>
                <span className={styles.title}>Название</span>
                <span className={styles.sub}>Краткое название композиции</span>
                <input
                    className={styles.input}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className={styles.container}>
                <span className={styles.title}>Текст</span>
                <span className={styles.sub}>Максимальный размер не должен превышать 500 символов</span>
                <textarea
                    className={styles.text}
                    value={text}
                    onChange={(e) => (setText(e.target.value))}
                />
            </div>
            <div className={styles.container}>
                <span className={styles.title}>Обложка</span>
                <span className={styles.sub}>Необязательное поле. Размер не более 10 мб</span>
                <div>
                    <button className={styles.button} onClick={uploadImage}>Загрузить</button>
                    <span className={styles.filename}>{imageFileName}</span>
                </div>
            </div>
            <div className={styles.container}>
                <span className={styles.title}>Трек</span>
                <span className={styles.sub}>Размер не более 10 мб</span>
                <div>
                    <button className={styles.button} onClick={uploadTrack}>Загрузить</button>
                    <span className={styles.filename}>{trackFileName}</span>
                </div>
            </div>
            <div className={styles.container}>
                <span className={styles.title}>Создание поста</span>
                <span className={styles.sub}>Выбрав данную функцию автоматически сгенерируется пост и все подписанные на вас пользователи получат оповещение о его создании</span>
                <input
                    className={styles.checkbox}
                    checked={isPublic}
                    onChange={(e) => setPublicity(e.target.checked)}
                    type="checkbox"
                />
            </div>
            <button className={styles.confirm} onClick={sendTrack}>Подтвердить</button>
        </div>
    );
}

export default Form;