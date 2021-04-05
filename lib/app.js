const express = require('express');
const app = express();
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');

const authRoutes = createAuthRoutes();
app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

app.use('/auth', authRoutes);
app.use('/api', ensureAuth);

app.use('/gifs', require('./controllers/gifs'));
app.use('/api/favorites', require('./controllers/favorites'));
app.use('/api/collections', require('./controllers/collections'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
