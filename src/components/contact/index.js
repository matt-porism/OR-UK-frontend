import { useState, useEffect } from 'react';
import HtmlSection from '../htmlsection';
import LinksList from '../links/LinksList'
import SideMenu from '../sidemenu';

const Contact = ({contactProps, styleName}) => {
  const {contactUs: { title, sections, ReadNextLink }} = contactProps;
  const [sectionHeadings, setSectionHeadings] = useState([]);

  useEffect(() => {
    setSectionHeadings(sections.map(section => section.sectionHeading));
  }, [sections]);

  return (
    <>
      <main id="content" className={styleName}>
        <div className="flexcontainer">
          
          <SideMenu subMenu={sectionHeadings} />

          <article className="flexright">
            <h1>{title}</h1>

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