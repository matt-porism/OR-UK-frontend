import React from 'react';
import ReadNextItem from '../readnext';

const ArticleListPage = ({article}) => {

  return (
    article.links &&
         <ul className="card-link-container listnostyle">
          {article.links.map ((link, index) => {
              return <ReadNextItem key={link.id ? link.id : index} linkItem={link} styleName="test" />
          })}
        </ul>
  )

      }
      export default ArticleListPage;

