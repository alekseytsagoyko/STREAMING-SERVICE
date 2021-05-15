const express = require('express');
const multer = require('multer');
const cors = require('cors');
const authMiddleware = require('./middlewares/authMiddleware');
const roleMiddleware = require('./middlewares/roleMiddleware');
const storageConfig = require('./configs/multer');
const authHandler = require('./handlers/authHandler');
const userRouter = require('./routes/usersRouter');
const fileRouter = require('./routes/fileRouter');
const trackRouter = require('./routes/tracksRouter');
const testRouter = require('./routes/testRouter');
const collectionRouter = require('./routes/collectionsRouter');
const mongoHelper = require('./helpers/mongoHelper');
const { port } = require('./configs/config');

const app = express();
const jsonParser = express.json({ extended: true });
const urlencodedParser = express.urlencoded({ extended: true });
mongoHelper.connect();

app.use(cors());
app.use(express.static(__dirname));
app.use(jsonParser);
app.use(urlencodedParser);
app.use(multer({ storage: storageConfig }).single('file'));

app.use("/users", roleMiddleware(['USER']), userRouter);
app.use('/tracks', trackRouter);
app.use('/collections', collectionRouter);
app.post("/login", authHandler.login);
app.post('/register', authHandler.registration);
app.use('/file', fileRouter);
app.use('/test', testRouter);

app.use(function (req, res, next) {
    res.status(404).send("Content not found");
});

app.listen(port, () => {
    console.log(`Server was started on ${port}`);
});

process.on("SIGINT", () => {
    mongoHelper.disconnect();
    process.exit();
});