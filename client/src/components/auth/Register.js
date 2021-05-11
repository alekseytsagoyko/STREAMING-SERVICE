import React, { useState } from 'react';
import { navigate } from 'hookrouter';
import useHttp from '@hooks/http/http.hook';
import styles from '@styles/auth/auth.css';

function Register() {

    const { request } = useHttp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerHandler = async () => {
        try {
            if (password != confirmPassword) throw new Error('Password do not match');
            let user = { email, password };
            await request('/register', 'POST', user);
            navigate('/login');
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className={`${styles.form} align`}>
            <div className={styles.title}>
                <span>Регистрация</span>
            </div>
            <input
                className={styles.input}
                type="text"
                placeholder="Почта"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br/>
            <input
                className={styles.input}
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br/>
            <input
                className={styles.input}
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />
            <br/>
            <div className={styles.mt30}>
                <span className={styles.hint} onClick={() => navigate('/login')}>Уже есть аккаунт</span>
                <button className={styles.button} onClick={registerHandler}>Создать</button>
            </div>
        </div>
    );
}

export default Register;