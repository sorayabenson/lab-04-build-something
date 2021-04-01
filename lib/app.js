const express = require('express');
const app = express();

app.use(express.json());

app.use('/v1/gifs', require('./controllers/gifs'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
