import LinkExternal from '../footer/LinkExternal';

const LinkWithTitle = ({ link }) => {
  if (!link) return null;

  return (
    <>
      <hr />
      <section>
        <p>
        {link.TextToDisplay && <h3>{link.TextToDisplay}</h3> }
          <LinkExternal link={link} styleName=""/> 
          </p>
      </section>
    </>
  )
}

export default LinkWithTitle;