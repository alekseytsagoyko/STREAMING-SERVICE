import React, { useContext, useEffect } from 'react';
import Header from "@components/main/header/Header";
import { useDispatch } from "react-redux";
import useHttp from "@hooks/http/http.hook";
import AuthContext from "@contexts/AuthContext";
import Container from "@components/main/Container";
import Player from "@components/common/Player/Player";
import { setCollection } from "@store/creators/collection.creators";
import { setPosts } from "@store/creators/posts.creators";
import { setUser } from "@store/creators/user.creators";
import styles from '@styles/main/main.css';

function Main() {

    const { id } = useContext(AuthContext);
    const { request } = useHttp();
    const dispatch = useDispatch();

    useEffect(async () => {
        try {
            const collection = await request(`/collections/${id}`);
            const posts = await request(`/posts/${id}`);
            const user = await request(`/users/${id}`);
            dispatch(setCollection(collection));
            dispatch(setPosts(posts));
            dispatch(setUser(user));
        } catch (e) {
            console.log(e.message);
        }
        return () => {
        };
    }, []);

    return (
        <>
            <div className={styles.main}>
                <Header/>
                <Container/>
            </div>
            <Player/>
        </>
    );
}

export default Main;