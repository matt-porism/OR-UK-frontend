import React from 'react';
import ReadNextItem from '../readnext';

const ArticleListPage = ({article}) => {

  return (
    article.links &&
         <ul className="readlinkscard">
          {article.links.map ((link, index) => {
              return <ReadNextItem key={link.id ? link.id : index} linkItem={link} styleName="listnostyle readlinksitem"/>
          })}
        </ul>
  )

      }
      export default ArticleListPage;

