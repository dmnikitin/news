import React from 'react';
import Footer from './footer.js';
import Article from "./article.js"


const ArticlesList = ({ list }) =>

    <div className="list">
 			{list.map( (item, index) =>
 				<Article key={index} item={item} />
 				)
 			}
 			<Footer />
 		</div>

export default ArticlesList
