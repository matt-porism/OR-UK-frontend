import { useState, useEffect } from 'react';
import ContentPage from "../page";
import Learn from '../home/Learn';
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
  let style;
  let itemCount = 2;
  let splitArray = [];
  while(listBoxLinks.length) {
    splitArray.push(listBoxLinks.splice(0,2))
  }

  return (
    <main className="main-container">
      <ContentPage title={`<h1>${article.title}</h1>`} introParagraph={article.introParagraph}/>
      { splitArray && splitArray.length > 0 && splitArray.map ((array, index) => {
             style = splitArray[index].length === itemCount ?  "listbox" : "listboxsingle";
                return  <div className={style} key={array[index].id}>
                <Learn styleName={style} list={array}/>
                </div>
              }) 
          }
    </main>
  )
}

export default GenericLandingPage;