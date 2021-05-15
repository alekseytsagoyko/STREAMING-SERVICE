import React, { useContext, useState } from 'react';
import AuthContext from "@contexts/AuthContext";

function MainModified() {

    const [file, setFile] = useState(0);
    const { id, token } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState(0);

    const changeHandler = (e) => {
        setFile(e.target.files[0]);
        const src = URL.createObjectURL(e.target.files[0])
        const audio = new Audio();
        audio.onloadedmetadata = () => {
            setDuration(Math.floor(audio.duration));
            URL.revokeObjectURL(src);
        };
        audio.src = src;
    };

    const sendFile = function () {
        console.log(file);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/file/upload", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            if (xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);

        let data = new FormData();
        data.append('file', file);
        data.append('id', id);
        data.append('title', title);
        data.append('duration', duration);

        xhr.send(data);
    };

    return (
        <div>
            <input style={{ border: 1 + 'px' + ' solid' }} type="text" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <input type="file" onChange={changeHandler}/>
            <button onClick={sendFile}>send</button>
        </div>
    );

}

export default MainModified;