const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;
let url;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(/.*/, (req, res) => {

    req.originalUrl === "/top" ?
        url = `https://newsapi.org/v2/top-headlines?country=us&page=${req.body.page}&pageSize=5&apiKey=${API_KEY}` :
        url = `https://newsapi.org/v2/everything?q=${req.originalUrl}&language=en&sortBy=popularity&page=${req.body.page}&pageSize=10&apiKey=${API_KEY}`

    fetch(url).then(response => {
            if (response.ok) {

                return response.json();
            }
            throw new Error('failed')
        }, networkError => console.log(networkError.message))
        .then(jsonResponse => res.json(jsonResponse))
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
