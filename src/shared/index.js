import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NewsBox from './components/newsbox';
import SourcesWrapper from './components/sourcesWrapper';

const state = window.LINK.link ? window.LINK.link : null;
delete window.LINK;

const content = (state === null)
    ? <BrowserRouter><SourcesWrapper /></BrowserRouter>
    : <BrowserRouter><NewsBox value={state} /></BrowserRouter>;

hydrate(content, document.getElementById('App'));
