import { useState, useEffect } from 'react';
import HtmlSection from '../htmlsection';
import SideMenu from '../sidemenu';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GenericContentPage = ({ cmsLocation, articleType }) => {
  const [article, setArticle] = useState(null);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);

  const [sectionHeadings, setSectionHeadings] = useState([]);

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

    if (article) {
      setSectionHeadings(article.sections.map(section => section.sectionHeading));
    }

  }, [article, data, isError, articleType]);

  if (isError || !article) return null;

  let readNextLink = <></>
  if (article.ReadNextLink) {
    readNextLink = (<><hr />
      <Link to={article.ReadNextLink.url}>
        {article.ReadNextLink.TextToDisplay}
      </Link></>)
  }

  return (
    <main id="content" className="main-container">
      <div className="page-container flex-container">
        <SideMenu subMenu={sectionHeadings} />
        <article className="flexright">
          <h1>{article.title}</h1>
          <HtmlSection sections={article.sections} />
          {readNextLink}
        </article>
      </div>
    </main>
  )
}

export default GenericContentPage;