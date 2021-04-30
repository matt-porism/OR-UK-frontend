import React from 'react';
import LinkCard from '../home/card/LinkCard';

const ArticleListPage = ({article}) => {

  return (
    article.links &&
       <div id={`${article.links.id}_title`} className="cardgrid">
        {article.links.map ((link, index) => {
          
          //   URL API does not work because of relatives
          if (link.TextToDisplay && link.TextToDisplay === "Community forum") link.external = true; 
          return <LinkCard linkItem={link} styleName="listnostyle card-content"/>
        })}
        </div>
  )


      }
      export default ArticleListPage;

