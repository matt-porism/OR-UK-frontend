import { useState, useEffect } from 'react';
import ContentPage from '../page'
import CaseStudyOverview from './CaseStudyOverview';
import useOukapi from '../../helpers/dataFetch';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const CASE_STUDIES_LANDING_PAGE = process.env.REACT_APP_CASE_STUDIES_LANDING_PAGE;
const CASE_STUDIES = process.env.REACT_APP_CASE_STUDIES;

const CaseStudiesLandingPage = ({styleName}) => {
  const [title, setTitle] = useState("");
  const [introParagraph, setIntroParagraph] = useState("");

  let data, caseStudiesData, isError;
  [{data}, isError] = useOukapi(new URL(CASE_STUDIES_LANDING_PAGE, BASE_URL).href);
  [caseStudiesData, isError] = useOukapi(new URL(CASE_STUDIES, BASE_URL).href);

  useEffect(() => {
    if (data.hasOwnProperty("title") && data.hasOwnProperty("introParagraph") ) {
      setTitle(data.title);
      setIntroParagraph(data.introParagraph)
    }
  }, [data]);

  if (isError || !data || !caseStudiesData) return <h1>404 - content not found!</h1>;

  const caseStudyOverviewElements = caseStudiesData.data.map(caseStudy => {
    return <CaseStudyOverview {...caseStudy} key={caseStudy.id}  />
  });

  return (
    <main className={styleName} role="main" aria-label="main">
      <ContentPage title={`<h1>${title}</h1>`} introParagraph={introParagraph} />
      <ul>
        {caseStudyOverviewElements}
      </ul>
    </main>
  )
}

export default CaseStudiesLandingPage;