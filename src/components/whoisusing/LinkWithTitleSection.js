import { Link } from 'react-router-dom';

const LinkWithTitle = ({title, link: { url, TextToDisplay } }) => {
  if (!title || !url || !TextToDisplay) return null;

  return (
    <>
      <hr />
      <section>
        <h3>{title}</h3>
        <Link to={url}>
          {TextToDisplay}
        </Link>
      </section>
    </>
  )
}

export default LinkWithTitle;