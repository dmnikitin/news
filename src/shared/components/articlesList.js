import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Article from './article';

const List = ({ list }) => (
    <div className="list">
      {list.map(item => <Article key={item.publishedAt + Math.random()} item={item} />)}
      <Footer />
    </div>
);

List.propTypes = {
    list: PropTypes.instanceOf(Array).isRequired,
};
export default List;
