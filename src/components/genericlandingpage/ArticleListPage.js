import React from 'react';
import ReadNextItem from '../readnext';

const ArticleListPage = ({article}) => {

  return (
    article.links &&
       <div>
         <ul className="readlinkscard">
        {article.links.map ((link, index) => {
            return <ReadNextItem key={link.id ? link.id : index} linkItem={link} styleName="listnostyle readlinksitem"/>
        })}
        </ul>
        </div>
  )

      }
      export default ArticleListPage;

