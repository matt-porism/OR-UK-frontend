import { useState, useEffect } from 'react';
import useOukapi from '../../helpers/dataFetch';
import HtmlSection from '../htmlsection';
import SideMenu from '../sidemenu';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const CaseStudy = ({ match }) => {
  const [sectionHeadings, setSectionHeadings] = useState([]);

  const { slugField } = match.params;
  const [{ data, isError }] = useOukapi(new URL('/case-studies?slugfield=' + slugField, BASE_URL).href);

  useEffect(() => {
    if (data[0] && data[0].CaseStudy && data[0].CaseStudy.sections) {
      setSectionHeadings(data[0].CaseStudy.sections.map(section => section.sectionHeading));
    }

  }, [data]);

  if (isError || !data[0]) return <h1>404 - content not found!</h1>;
  const { title, sections, ReadNextLink } = data[0].CaseStudy;
  let readNextLink = null;
  if (ReadNextLink) {
    readNextLink = (<><hr />
      <Link to={ReadNextLink.url}>
        {ReadNextLink.TextToDisplay}
      </Link></>)
  }

  return (
    <main id="content" className="main">
      <div className="flexcontainer">
        <SideMenu subMenu={sectionHeadings} />
        <article className="flexright">
          <h1>{title}</h1>
          <HtmlSection sections={sections} />
          {readNextLink}
        </article>
      </div>
    </main>
  )
}

export default CaseStudy;