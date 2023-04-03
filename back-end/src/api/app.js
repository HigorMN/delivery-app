const express = require('express');
const cors = require('cors');
const errorHandler = require('../middlewares/Error/ErrorHadler');
const userRoutes = require('../routes/users.route');
const routes = require('../routes');
const registerRoutes = require('../routes/register.route');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(routes);
app.use(registerRoutes);
app.use(userRoutes);

app.use('/images', express.static('public'));

app.use(errorHandler);

module.exports = app;
