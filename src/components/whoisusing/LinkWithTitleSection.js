import { Link } from 'react-router-dom';

const LinkWithTitle = ({ title, link: { url, TextToDisplay } }) => {
  if (!title || !url || !TextToDisplay) return null;

  return (
    <>
      <hr />
      <section>
        <h3>{title}</h3>
        <p>
          <Link to={url}>
            {TextToDisplay}
          </Link>
        </p>
      </section>
    </>
  )
}

export default LinkWithTitle;