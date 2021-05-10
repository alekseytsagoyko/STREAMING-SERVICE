import React from 'react';

function Main() {

    const [file, setFile] = React.useState(null);

    const sendFile = function (event) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/file", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            if (xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };

        let data = new FormData();
        data.append('file', event.target.files[0]);

        xhr.send(data);
    }

    return <div>
        <input type="file" onChange={sendFile}/>
    </div>;

}

export default Main;