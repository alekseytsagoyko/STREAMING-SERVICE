import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setImage, setStatus, setUsername } from "@store/creators/user.creators";
import styles from '@styles/main/content/settings/settings.css';
import useHttp from "@hooks/http/http.hook";
import AuthContext from "@contexts/AuthContext";
import { navigate } from 'hookrouter';

const src = 'https://sun9-2.userapi.com/impg/MyM4ZQ-lo0U7MjtWxSjsjuNQ4GWaaEBTkBqmiA/4SshhvMKh6w.jpg?size=1080x1350&quality=96&sign=ce57fd624e2d7fd6ebb8febd9733db22&type=album';

function Settings() {

    const { user } = useSelector((state) => state);
    const { id, token } = useContext(AuthContext);
    const dispatch = useDispatch();
    const fileInput = useRef();

    const changeAvatar = async () => {
        fileInput.current.click();
    };

    const updateUser = async () => {
        try {
            let data = new FormData();
            data.append('id', id);
            data.append('username', user.username);
            data.append('status', user.status);
            if (fileInput.current.files[0]) {
                data.append('image', fileInput.current.files[0]);
            }
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", "http://localhost:3000/users/update");
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            xhr.send(data);
            navigate('/feed');
        } catch (e) {
            console.log('error');
            console.log(e.message);
        }
    };

    useEffect(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                dispatch(setImage(fileReader.result));
            };
            fileReader.readAsDataURL(e.target.files[0]);
        };
        fileInput.current = input;
    }, []);

    return (
        <div className={styles.settings}>
            <span className={styles.title}>Настройки</span>
            <div className={styles.info}>
                <img
                    className={styles.img}
                    src={user.image}
                    onClick={changeAvatar}
                    alt=""
                />
                <span className={styles.text}>
                        Для изменения аватарки кликните на картинку слева. Далее выберите нужное фото и сохраните сделанные изменения.
                </span>
            </div>
            <div className={styles.info}>
                <div className={styles.container}>
                    <span className={styles.description}>Имя пользователя</span>
                    <input
                        className={styles.input}
                        value={user.username}
                        type="text"
                        onChange={(e) => dispatch(setUsername(e.target.value))}
                    />
                    <span className={styles.description}>Статус</span>
                    <textarea
                        className={styles.input}
                        value={user.status}
                        onChange={(e) => dispatch(setStatus(e.target.value))}
                    />
                </div>
            </div>
            <button className={styles.button} onClick={updateUser}>Сохранить</button>
        </div>
    );
}

export default Settings;