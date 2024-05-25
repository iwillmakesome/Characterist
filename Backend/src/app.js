const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const ffmpeg = require('fluent-ffmpeg');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const PORT = process.env.PORT;
const FRONTEND_HOST = process.env.FRONTEND_HOST;

// routers
const sceneRouter = require('./routes/sceneRoutes');
// const tagRouter = require('./routes/tagRoutes');
// const worksRouter = require('./routes/worksRoutes');
// const characterRouter = require('./routes/characterRoutes');
const fileRouter = require('./routes/fileRoutes');

// cors
app.use(
  cors({
    // origin: [FRONTEND_HOST],
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// bodyParser (read req.body)
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.ip} ${req.method} ${req.url}`);
  next();
});

// routers
app.use('/scenes', sceneRouter);
// app.use('/tags', tagRouter);
// app.use('/works', worksRouter);
// app.use('/characters', characterRouter);
app.use('/files', fileRouter);

// default server message
app.use('/', (req, res) => {
  res.send('Backend Server');
});

// error control
app.use((err, req, res) => {
  console.log('A SERVER ERROR OCCURRED : ' + err.message);
  res.status(500).send(err.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Successfully opened the server / PORT: ${PORT}`);
});
