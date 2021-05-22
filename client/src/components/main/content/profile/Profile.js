import React, { useContext, useEffect } from 'react';
import { useDispatch } from "react-redux";
import useHttp from "@hooks/http/http.hook";
import ProfileHeader from "@components/main/content/profile/ProfileHeader";
import ProfileContent from "@components/main/content/profile/ProfileContent";
import styles from '@styles/main/content/profile/profile.css';
import { setProfile } from "@store/creators/profile.creators";
import store from "@store/store";
import AuthContext from "@contexts/AuthContext";

function Profile({ id }) {

    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const dispatch = useDispatch();

    useEffect(async () => {
        const _id = store.getState().profile.id;
        if (_id != id) {
            const data = await request(`/users/profile/${id}/${auth.id}`);
            console.log(data);
            dispatch(setProfile(data));
        }
    }, []);

    return (
        <div className={styles.profile}>
            <ProfileHeader id={id}/>
            <ProfileContent/>
        </div>
    );
}

export default Profile;