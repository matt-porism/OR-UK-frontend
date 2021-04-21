import useOukapi from '../../helpers/dataFetch';
import HtmlSection from '../htmlsection';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const CaseStudy = ({match}) => {
  const { slugField } = match.params;
  const [{ data, isError }] = useOukapi(new URL('/case-studies?slugfield=' + slugField, BASE_URL).href);

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
    <main className="main">
      <h1>{title}</h1>
      <HtmlSection sections={sections} />
      {readNextLink}
    </main>
  )
}

export default CaseStudy;