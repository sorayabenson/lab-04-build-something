const express = require('express');
const app = express();
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');

app.use(express.json());
const authRoutes = createAuthRoutes();

//figure out how to modify what the auth routes and user table looks like in this new system before moving forward with favorites endpoints.

app.use('/auth', authRoutes);
app.use('/api', ensureAuth);

app.use('/gifs', require('./controllers/gifs'));
app.use('/api/favorites', require('./controllers/favorites'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
