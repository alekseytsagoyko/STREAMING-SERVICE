import React from 'react';
import Header from "@components/main/header/Header";
import Container from "@components/main/Container";
import styles from '@styles/main/main.css';
import Player from "@components/common/Player/Player";

function Main() {

    return (
        <div className={styles.main}>
            <Header />
            <Container />
            <Player />
        </div>
    );
}

export default Main;