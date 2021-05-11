import React, { useContext, useState } from 'react';
import { navigate } from 'hookrouter';
import useHttp from '@hooks/http/http.hook';
import AuthContext from "@contexts/AuthContext";
import styles from '@styles/auth/auth.css';

function Login() {

    const { login } = useContext(AuthContext);
    const { request } = useHttp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async () => {
        try {
            let user = { email, password };
            let data = await request('/login', 'POST', user);
            login(data.id, data.token);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>Вход</span>
            </div>
            <input className={styles.input}
                   autoFocus={true}
                   type="text"
                   placeholder="Почта"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input className={styles.input}
                   type="password"
                   placeholder="Пароль"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <div className={styles.mt30}>
                <span className={styles.hint} onClick={() => navigate('/register')}>Создать аккаунт</span>
                <button className={styles.button} onClick={loginHandler}>Войти</button>
            </div>
        </div>
    );
}

export default Login;