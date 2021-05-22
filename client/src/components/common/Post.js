import React, { useContext, useEffect, useState } from 'react';
import {navigate} from 'hookrouter';
import Track from "@components/common/Track";
import PlayerContext from "@contexts/PlayerContext";
import styles from '@styles/common/post.css';

const src = 'https://sun9-7.userapi.com/impg/aSuzGH4MtVL0ZI9kT-mmMuQw66-nnHgxsKKyMQ/pvTodjbw9aI.jpg?size=2560x1244&quality=96&sign=0a703f26b53490cd7574cda8c79ddea6&type=album';

function monthConvert(month) {
    switch (month) {
        case 0:
            return 'января';
        case 1:
            return 'февраля';
        case 2:
            return 'марта';
        case 3:
            return 'апреля';
        case 4:
            return 'мая';
        case 5:
            return 'июня';
        case 6:
            return 'июля';
        case 7:
            return 'августа';
        case 8:
            return 'сентября';
        case 9:
            return 'октября';
        case 10:
            return 'ноября';
        case 11:
            return 'декабря';
    }
}

function Post({ post }) {

    const [date, setDate] = useState('');
    const { play } = useContext(PlayerContext);

    const redirect = () => {
        navigate(`/profile/${post.user}`);
    };

    useEffect(() => {
        const _date = new Date(post.date);
        setDate(_date.getDate() + ' ' + monthConvert(_date.getMonth()));
    }, []);

    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <img className={styles.icon} src={post.avatar} alt=""/>
                <span className={styles.creator} onClick={redirect}>{post.track?.creator?.username}</span>
                <span className={styles.date}>{date}</span>
            </div>
            <span className={styles.text}>
                {post.text}
            </span>
            {post.image && <img className={styles.img} src={post.image} alt=""/>}
            <div className={styles.track} onClick={() => play(post.track._id)}>
                <Track track={post.track}/>
            </div>
        </div>
    );
}

export default Post;