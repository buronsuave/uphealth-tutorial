const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();
app.use(bodyParser.json());
app.use('/', router);
app.listen(8081, () => console.log('Middleware is running on http://localhost:8081'));
