import React from 'react';
import Header from "@components/main/header/Header";
import Container from "@components/main/container/Container";
import styles from '@styles/main/main.css';

function Main() {

    return (
        <div className={styles.main}>
            <Header />
            <Container />
        </div>
    );
}

export default Main;