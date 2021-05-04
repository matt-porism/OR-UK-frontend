import { useState, useEffect } from 'react';
import ArticleListPage from './ArticleListPage';
import ContentPage from "../page";
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

  return (
    <main className="main-container" id="content">
      <div className="page-container">
      <ContentPage title={`<h1>${article.title}</h1>`} introParagraph={article.introParagraph}/>
      <ArticleListPage article={article}/>
      </div>
    </main>
  )
}

export default GenericLandingPage;