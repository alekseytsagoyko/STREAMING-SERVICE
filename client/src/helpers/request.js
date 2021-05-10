function request(method, url, data, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open(method, 'http://localhost:3000' + url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.upload.onprogress = p => {
        console.log(Math.round((p.loaded / p.total) * 100) + '%');
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status <= 300 && callback) {
            callback(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(data));

}

export default request;