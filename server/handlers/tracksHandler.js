const fs = require('fs');
const header = 'data:audio/wav;base64,';

exports.getTracks = (req, res) => {
    const path = `data/tracks/${req.params.id}.mp3`;
    fs.access(path, fs.constants.F_OK, (err) => {
        console.log(`${path} ${err ? 'does not exist' : 'exists'}`);
    });
    fs.readFile(path, (err, content) => {
        if (err) {
            return res.status(404).json({ message: 'File does not exist' });
        }
        const base64Content = new Buffer(content).toString('base64');
        return res.status(200).json({ file: header + base64Content });
    });
};