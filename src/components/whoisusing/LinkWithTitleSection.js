import LinkExternal from '../footer/LinkExternal';

const LinkWithTitle = ({ link }) => {
  if (!link) return null;

  return (
    <>
      <hr />
      <section>
        <h3>{link.title}</h3>
        <p>
          <LinkExternal link={link} styleName=""/> 
        </p>
      </section>
    </>
  )
}

export default LinkWithTitle;