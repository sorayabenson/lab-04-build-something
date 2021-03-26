const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/contacts', require('./controllers/contacts.js'));
app.use('/api/users', require('./controllers/users.js'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
