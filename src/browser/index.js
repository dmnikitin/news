import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/index';
import NewsBox from '../shared/components/newsbox';

const state = window.LINK ? window.LINK.link : null;
delete window.LINK;

const content = (state === null)
    ? <BrowserRouter><App /></BrowserRouter>
    : <BrowserRouter><NewsBox value={state} /></BrowserRouter>;

hydrate(content, document.getElementById('App'));
