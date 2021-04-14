import HtmlSection from '../htmlsection';

const Contact = ({contactProps, styleName}) => {
  const {contactUs: { sections }} = contactProps;

  return (
    <>
      <main className={styleName}>
        <div className="flexcontainer">
          <div className="flexright">
            <HtmlSection sections={sections} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact;