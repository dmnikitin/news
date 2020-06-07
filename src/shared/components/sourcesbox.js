import React from 'react';
import PropTypes from 'prop-types';
import { instances, headers } from '../../data/data';

export default function SourcesBox({ loadData }) {
  return (
    <div className="source-box">
        {
            instances.map((e, index) => {
                const link = `/${e.name}`;
                const className = `source-instance-${index}`;
                return (
                    <button
                      type="button"
                      className={className}
                      key={e.id}
                      onClick={() => loadData(link)}
                    >
                        <h2>
                            {headers[index]}
                        </h2>
                        <div className="bg-image-blur" />
                        <img alt="" />
                    </button>
                    );
            })
        }
    </div>
  );
}

SourcesBox.propTypes = {
  loadData: PropTypes.func.isRequired,
};
