import React from 'react';
import request from '~/helpers/request';
import styles from '@styles/auth/auth.css';

function Login() {

    const email = useInput('text', 'Почта');
    const password = useInput('password', 'Пароль');

    const login = () => {
        let user = {
            email: email.value,
            password: password.value
        };
        let setToken = (response) => {
            let data = JSON.parse(response);
            localStorage.setItem("token", data.token)
            location.href = '/';
        };
        request("POST", "http://localhost:3000/login", user, setToken);
    };

    const redirect = () => {
        location.href = '/registration';
    };

    return <div className={styles.form}>
        <div className={styles.title}>
            <span>Вход</span>
        </div>
        <input className={styles.input}
               autoFocus={true}
               {...email.bind}/>
        <br/>
        <input className={styles.input}
               {...password.bind}/>
        <br/>
        <div className={styles.mt30}>
            <span className={styles.hint} onClick={redirect}>Создать аккаунт</span>
            <button className={styles.button} onClick={login}>Войти</button>
        </div>
    </div>;
}

export default Login;