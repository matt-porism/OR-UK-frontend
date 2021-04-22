import { useState, useEffect } from 'react';
import HtmlSection from '../htmlsection';
import LinksList from '../links/LinksList'
import SideMenu from '../sidemenu';

const Contact = ({contactProps, styleName}) => {
  const {contactUs: { sections, ReadNextLink }} = contactProps;
  const [sectionHeadings, setSectionHeadings] = useState([]);

  useEffect(() => {
    setSectionHeadings(sections.map(section => section.sectionHeading));
  }, [sections]);

  return (
    <>
      <main className={styleName}>
        <div className="flexcontainer">
          
          <SideMenu subMenu={sectionHeadings} />

          <article className="flexright">

            <HtmlSection sections={sections} />

            <hr/>

            <LinksList list={[{ id: 1, url: ReadNextLink.url, TextToDisplay:ReadNextLink.TextToDisplay }]} />
          </article>
        </div>
      </main>
    </>
  )
}

export default Contact;