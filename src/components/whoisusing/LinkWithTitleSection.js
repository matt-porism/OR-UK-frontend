import LinkExternal from '../footer/LinkExternal';

const LinkWithTitle = ({ link }) => {
  if (!link) return null;

  return (
    <>
      <hr />
      <section>
        {link.TextToDisplay && <h3>{link.TextToDisplay}</h3> }
          <LinkExternal link={link} styleName=""/> 
      </section>
    </>
  )
}

export default LinkWithTitle;