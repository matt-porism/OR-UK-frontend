import LinkExternal from "../footer/LinkExternal";

const LinkWithTitle = ({ title, link: { url, TextToDisplay } }) => {
  if (!title || !url || !TextToDisplay) return null;

  const link = {
    url:url,
    TextToDisplay: TextToDisplay,
    labelText: TextToDisplay,
    external: true
  }

  return (
    <>
      <hr />
      <section>
        <h3>{title}</h3>
        <p>
          <LinkExternal link={link} styleName="button button-primary">
          </LinkExternal>
        </p>
      </section>
    </>
  )
}

export default LinkWithTitle;