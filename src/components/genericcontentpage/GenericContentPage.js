import { useState, useEffect } from 'react';
import useOukapi from '../../helpers/dataFetch';
import HtmlSection from '../htmlsection';
import SideMenu from '../sidemenu';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GenericContentPage = ({ cmsLocation, articleType }) => {
  const [{ data, isError }] = useOukapi(new URL(cmsLocation, BASE_URL).href);
  const [article, setArticle] = useState(null);

  const [sectionHeadings, setSectionHeadings] = useState([]);

  useEffect(() => {
    if (data) {
      const pageData = Array.isArray(data) ? data[0] : data;
      setArticle(pageData[articleType])
    };

    if (article) {
      setSectionHeadings(article.sections.map(section => section.sectionHeading));
    }

  }, [article, data, articleType]);

  if (isError || !data[0] || !article) return null;

  let readNextLink = <></>
  if (article.ReadNextLink) {
    readNextLink = (<><hr />
      <Link to={article.ReadNextLink.url}>
        {article.ReadNextLink.TextToDisplay}
      </Link></>)
  }

  return (
    <main className="main">
      <div className="flexcontainer">
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