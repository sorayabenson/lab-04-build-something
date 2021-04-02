const express = require('express');
const app = express();

app.use(express.json());

app.use('/gifs', require('./controllers/gifs'));
app.use('/api', require('./controllers/favorites'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
