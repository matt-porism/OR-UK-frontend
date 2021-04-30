import React from 'react';
import LinkCard from '../home/card/LinkCard';

const ArticleListPage = ({article}) => {

  return (
    article.links &&
       <div id={`${article.links.id}_title`} className="cardgrid">
        {article.links.map (link => {
          return <ul className="listnostyle"><LinkCard linkItem={link} styleName="card-content"/></ul>
        })}
        </div>
  )


      }
      export default ArticleListPage;

