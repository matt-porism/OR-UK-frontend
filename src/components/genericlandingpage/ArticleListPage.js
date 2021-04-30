import React from 'react';
import LinkCard from '../home/card/LinkCard';

const ArticleListPage = ({article}) => {

  return (
    article.links &&
       <div id={`${article.links.id}_title`} className="cardgrid">
        {article.links.map ((link, index) => {
          
          //   URL API does not work because of relatives
          if (link.TextToDisplay && link.TextToDisplay === "Community forum") link.external = true; 
          return <ul key={link.id ? link.id: index} className="listnostyle"><LinkCard linkItem={link} styleName="card-content"/></ul>
        })}
        </div>
  )


      }
      export default ArticleListPage;

