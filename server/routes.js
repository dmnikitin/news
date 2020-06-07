import * as ssr from '../public/server';
import templateRender from './templateRender';

const router = require('express').Router();
const fetch = require('node-fetch');
const dotenv = require('dotenv');

const { API_KEY } = dotenv.config().parsed;
let url;

router.get('/', (req, res) => {
  const app = ssr.default('app');
  const markup = templateRender(app);
  res.send(markup);
});

router.get('/:link', (req, res) => {
  const { link } = req.params;
  const app = ssr.default('newsbox', req.url, link);
  const markup = templateRender(app, link);
  res.send(markup);
});

router.post(/.*/, (req, res) => {
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

module.exports = router;
