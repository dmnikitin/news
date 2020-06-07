const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./server/routes');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const host = '0.0.0.0';
const PORT = process.env.PORT || 8080;
app.listen(PORT, host, () => console.log(`Listening on http://localhost:${PORT}/`));
