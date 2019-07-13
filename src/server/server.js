import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/index';
import NewsBox from '../shared/components/newsbox';


export function render(initialState, location, value) {

    const app = initialState === 'app'
        ? <App />
        : <StaticRouter location={location}>
            <NewsBox value={value} />
        </StaticRouter>

    const content = renderToString(app);
    return content;

}
