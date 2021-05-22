import React, { useContext } from 'react';
import useHttp from "@hooks/http/http.hook";
import PlayerContext from "@contexts/PlayerContext";
import AuthContext from "@contexts/AuthContext";
import TrackInfo from "@components/common/TrackInfo";
import convert from "~/helpers/convert";
import { deleteTrack } from "@store/creators/collection.creators";
import { setAdded } from "@store/creators/player.creators";
import store from "@store/store";
import styles from "@styles/main/content/tracks/item.css";
import removeIcon from "@resources/icons/remove.svg";
import { useDispatch } from "react-redux";

function TrackItem({ track }) {

    const { play, add } = useContext(PlayerContext);
    const { id } = useContext(AuthContext);
    const { request } = useHttp();
    const dispatch = useDispatch();

    const playHandler = () => {
        play(track._id);
    };

    const removeHandler = async () => {
        try {
            const currentTrackId = store.getState().player.id;
            const body = { trackId: track._id, userId: id };
            await request('/collections', 'PUT', body);
            dispatch(deleteTrack(track._id));
            if (currentTrackId == track._id) dispatch(setAdded(false));
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className={styles.item} onClick={playHandler}>
            <TrackInfo track={track}/>
            <img
                className={styles.itemIcon}
                src={removeIcon}
                onClick={removeHandler}
                alt=""
            />
            <span className={styles.duration}>{convert(track.duration)}</span>
        </div>
    );
}

export default TrackItem;