import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router-dom';
import NewsBox from './components/newsbox';
import SourcesWrapper from './components/sourcesWrapper';
import './sass/styles.scss';

export default function App({ selected }) {
    let path;
    if (selected) path = `/${selected}`;
    return (
        <StaticRouter>
            <div className="main">
              { !path
                ? <SourcesWrapper />
                : <NewsBox value={selected} />
                }
            </div>
        </StaticRouter>
    );
}

App.defaultProps = {
    selected: String,
};

App.propTypes = {
    selected: PropTypes.string,
};
