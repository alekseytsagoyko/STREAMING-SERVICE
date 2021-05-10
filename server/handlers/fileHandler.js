exports.uploadFile = function(req, res) {

    let filedata = req.file;
    console.log(filedata);
    if (!filedata) {
        res.send("Ошибка загрузки файла.");
    } else {
        res.send("File loaded successfully!");
    }

};