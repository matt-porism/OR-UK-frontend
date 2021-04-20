import useOukapi from '../../helpers/dataFetch';
import HtmlSection from '../htmlsection';
import {Link} from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GenericContentPage = ({match}) => {
  const {slugField} = match.params;

  const [{ data, isError }] = useOukapi(`${BASE_URL}pages?slugfield=${slugField}`);

  if (isError || !data[0]) return <h1>404 - content not found!</h1>;
  const {page} = data[0];

  let readNextLink = <></>
  if (page.ReadNextLink){
    readNextLink = (<><hr/>
    <Link to={page.ReadNextLink.url}>
								{page.ReadNextLink.TextToDisplay}
							</Link></>)
  }

  return (
    <main className="main">
      <h1>{page.title}</h1>
      <HtmlSection sections={page.sections} />
      {readNextLink}
    </main>
  )
}

export default GenericContentPage;