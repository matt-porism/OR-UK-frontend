import React from 'react';
import FooterLinksSection from "./FooterLinksSection";

const FooterColumn = ({ title, links, subSection }) => {

  return (
    <div className="footer__column">
      <FooterLinksSection title={title} links={links}/>
      {subSection}
    </div>
  )

}
export default FooterColumn;
