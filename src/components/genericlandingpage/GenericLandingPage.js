import { useState, useEffect } from 'react';
import ContentPage from "../page";
import CardList from '../home/card/index';
import LinkCard from '../home/card/LinkCard'
const BASE_URL = process.env.REACT_APP_BASE_URL;


const GenericLandingPage = ({cmsLocation, articleType}) => {

  const [article, setArticle] = useState(null);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetch(new URL(cmsLocation, BASE_URL).href)
      .then(res => res.json())
      .then(jsonRes => setData(jsonRes))
      .catch(err => setIsError(err))
  }, [cmsLocation]);

  useEffect(() => {
    // check we have data, no error, and if data is array, array has elements
    if (data && !isError && (!Array.isArray(data) || data.length)) {
      const pageData = Array.isArray(data) ? data[0] : data;
      setArticle(pageData[articleType])
    };

  }, [article, data, isError, articleType]);

  if (isError || !article) return null;

  let listBoxLinks = [...article.links];
  let splitArray = [];
  while(listBoxLinks.length) {
    splitArray.push(listBoxLinks.splice(0,2))
  }

  return (
    <main className="main-container">
      <ContentPage title={`<h1>${article.title}</h1>`} introParagraph={article.introParagraph}/>
      {article.links &&
                        ( <div id={`${article.links.id}_title`} className="cardgrid">
                          {article.links.map (link => {
                            return <ul className="listnostyle"><LinkCard linkItem={link} styleName="card-content"/></ul>
                          })}
                            
                        
                        </div>)
}
    </main>
  )
}

export default GenericLandingPage;