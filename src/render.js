import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './shared/app';
import NewsBox from './shared/components/newsbox';

export default function render(initialState, location, value) {
    const app = initialState === 'app'
        ? <App />
        : (
          <StaticRouter location={location}>
              <NewsBox value={value} />
          </StaticRouter>
        );
    return renderToString(app);
}
