import { useState, useEffect } from 'react';
import ArticleListPage from './ArticleListPage';
import InjectHtml from "../home/InjectHtml";
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
    <div className="page-container">
          <main className="main-container" id="content">
            <h1>{article.title}</h1>
            <InjectHtml paragraphText={article.introParagraph} />
            <ArticleListPage article={article}/>
          </main>
    </div>
  )
}

export default GenericLandingPage;