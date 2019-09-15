const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const API_KEY = dotenv.config().parsed.API_KEY;
const host = '0.0.0.0';
const PORT = process.env.PORT || 8080;
let url;


import * as ssr from './public/server.js';


app.listen(PORT, host, () => console.log(`Listening on http://localhost:${PORT}/`));

app.get('/', (req, res) => {
    const markup = ssr.render('app')
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
       <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/bundle.css">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
        <title>news</title>
      </head>
      <body>
        <div id="App">${markup}</div>
        <script type="text/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.get('/:link', (req, res) => {
    const link = req.params.link;
    const markup = ssr.render("newsbox", req.url, link);

    res.send(`
        <!DOCTYPE html>
        <html>
          <head>
           <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" href="/bundle.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
            <script>window.LINK = ${JSON.stringify({ link })}</script>
            <title>news</title>
          </head>
          <body>
            <div id="App">${markup}</div>
            <script type="text/javascript" src="/bundle.js"></script>
          </body>
        </html>
  `);
});

app.post(/.*/, (req, res) => {
    url = req.originalUrl === '/top'
        ? `https://newsapi.org/v2/top-headlines?country=us&page=${req.body.page}&pageSize=10&apiKey=${API_KEY}`
        : `https://newsapi.org/v2/everything?q=${req.originalUrl}&language=en&sortBy=popularity&page=${req.body.page}&pageSize=10&apiKey=${API_KEY}`;

    fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('failed');
        }, networkError => console.log(networkError.message))
        .then(jsonResponse => res.json(jsonResponse));
});
