import { useState, useEffect } from 'react';
import ContentPage from '../page'
import useOukapi from '../../helpers/dataFetch';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const CASE_STUDIES_LANDING_PAGE = process.env.REACT_APP_CASE_STUDIES_LANDING_PAGE;

const CaseStudiesLandingPage = ({styleName}) => {
  const [title, setTitle] = useState("");
  const [introParagraph, setIntroParagraph] = useState("");

  const [{data}, isError] = useOukapi(new URL(CASE_STUDIES_LANDING_PAGE, BASE_URL).href);

  useEffect(() => {
    if (data.hasOwnProperty("title") && data.hasOwnProperty("introParagraph") ) {
      setTitle(data.title);
      setIntroParagraph(data.introParagraph)
    }
  }, [data]);
  
  if (isError || !data) return <h1>404 - content not found!</h1>;

  return (
    <main className={styleName}>
      <ContentPage title={`<h1>${title}</h1>`} introParagraph={introParagraph} />
    </main>
  )
}

export default CaseStudiesLandingPage;