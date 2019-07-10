import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router-dom';
import NewsBox from './components/newsbox';
import SourcesBox from './components/sourcesbox';
import './sass/styles.scss';

export default function App(props) {
    const { selected } = props;
    let path;
    if (selected) path = `/${selected}`;
    return (
        <StaticRouter>
                    <div className="main">
                      { !path
                        ? <SourcesBox />
                        : <NewsBox value={selected} />
                       }
                    </div>
        </StaticRouter>
    );
}

App.propTypes = {
    selected: PropTypes.string,
};
