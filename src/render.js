import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './shared/app';
import NewsBox from './shared/components/newsbox';

export default function render(initialState, location, value) {
    const context = {};
    const app = initialState === 'app'
        ? (
          <StaticRouter context={context}>
              <App />
          </StaticRouter>
        )
        : (
          <StaticRouter location={location} context={context}>
              <NewsBox value={value} />
          </StaticRouter>
        );
    return renderToString(app);
}
