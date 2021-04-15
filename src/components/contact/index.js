import HtmlSection from '../htmlsection';
import LinksList from '../links/LinksList'

const Contact = ({contactProps, styleName}) => {
  const {contactUs: { sections, ReadNextLink }} = contactProps;

  return (
    <>
      <main className={styleName}>
        <div className="flexcontainer">
          <div className="flexright">
            <HtmlSection sections={sections} />

            <hr/>

            <LinksList list={[{ id: 1, url: ReadNextLink.url, TextToDisplay:ReadNextLink.TextToDisplay }]} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact;