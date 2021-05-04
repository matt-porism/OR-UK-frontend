import React from 'react';
import LinkCard from '../home/card/LinkCard';

const ArticleListPage = ({article, index}) => {

  return (
    article.links &&
       <div>
         <ul className="readlinkscard">
        {article.links.map (link => {
         return <ReadNextItem key={link.id ? link.id : index} linkItem={link} styleName="listnostyle readlinksitem"/>
        })}
        </ul>
        </div>
  )
      }
      export default ArticleListPage;

