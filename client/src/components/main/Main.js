import React, { useContext, useEffect } from 'react';
import Header from "@components/main/header/Header";
import { useDispatch } from "react-redux";
import useHttp from "@hooks/http/http.hook";
import AuthContext from "@contexts/AuthContext";
import Container from "@components/main/Container";
import Player from "@components/common/Player/Player";
import { setCollection } from "@store/creators/collection.creators";
import styles from '@styles/main/main.css';

function Main() {

    const { id } = useContext(AuthContext);
    const { request } = useHttp();
    const dispatch = useDispatch();

    useEffect(async () => {
        try {
            const data = await request(`/collections/${id}`);
            dispatch(setCollection(data));
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    return (
        <div className={styles.main}>
            <Header/>
            <Container/>
            <Player/>
        </div>
    );
}

export default Main;