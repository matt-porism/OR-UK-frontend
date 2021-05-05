
import Banner from '../banner';
import Title from './tiles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterColumn from './column';
import FooterLinksSection from './column/FooterLinksSection';
import CardList from '../shared/logocardlist';
//review refactor
//todo - terms and conditions policy to go into grid

const Footer = ({ footerProps, styleName }) => {

  const [about, setAboutLinks] = useState({});
  const [howItWorks, setHowItWorksLinks] = useState({});
  const [community, setCommunityLinks] = useState({});
  const [involved, setInvolvedLinks] = useState({});
  const [contactUs, setContactLink] = useState({});
  const [technicalFeedback, setTechnicalFeedback] = useState(null);
  const [technicalSection, setTechnicalSection] = useState(null);
  const [governanceBoardLogos, setGovernanceBoardLogos] = useState([]);


  useEffect(() => {

    if (footerProps) {

      if (footerProps.aboutLinks) setAboutLinks(footerProps.aboutLinks);
      if (footerProps.howItWorksLinks) setHowItWorksLinks(footerProps.howItWorksLinks);
      if (footerProps.communityLinks) setCommunityLinks(footerProps.communityLinks);
      if (footerProps.getInvolved) setInvolvedLinks(footerProps.getInvolved);
      if (footerProps.contact) setContactLink(footerProps.contact);
      if (footerProps.technicalFeedbackLink) setTechnicalFeedback(footerProps.technicalFeedbackLink);
      if (footerProps.governanceBoardSection && footerProps.governanceBoardSection.governanceBoardLogos) setGovernanceBoardLogos(footerProps.governanceBoardSection.governanceBoardLogos);

    }
  }, [footerProps]);

  useEffect(() => {
    if (technicalFeedback) {
      setTechnicalSection((
        <div className="footer__column__subsection">
          <FooterLinksSection links={[technicalFeedback.link]} title={technicalFeedback.title} />
        </div>
      ))
    }
  }, [technicalFeedback]);

  // there is an id property if needed when refactored

  return (
    Object.keys(about).length > 0 &&
    (<footer className={styleName} role="contentinfo">

      <div className="page-container">
        <div className="footer__top">
          <Banner />

          <div className="footerwrapper">
            <div className="footer__column">
              <Title title="Our stakeholders" />
              <div><CardList id={1} itemList={governanceBoardLogos} /></div>
            </div>

            <FooterColumn links={[{ ...involved.link, external: true }]} title={involved.title} externalLink={true} />
            <FooterColumn links={[contactUs.link]} title={contactUs.title} subSection={technicalSection} />
          </div>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="page-container">
          <div className="footerwrapper">
            <FooterColumn links={about.links} title={about.title} />
            <FooterColumn links={howItWorks.links} title={howItWorks.title} />
            <FooterColumn links={community.links} title={community.title} />
          </div>

          <div className="footnotegrid">
            <p>
              <small>Copyright &copy; 2019–2021 Open Referral UK</small>
            </p>
            <ul>
              <li key="1"><Link to="/accessibility-statement"><small>Accessibility statement</small></Link></li>
              <li key="2"><Link to="/terms-conditions"><small>Terms &amp; Conditions</small></Link></li>
              <li key="3"><Link to="/privacy-policy"><small>Privacy Policy</small></Link></li>
            </ul>
          </div>

        </div>
      </div>

    </footer>)
  );

}

export default Footer;
