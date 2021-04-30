
import Banner from '../banner';
import Title from './tiles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterColumn from './column';
import FooterLinksSection from './column/FooterLinksSection'
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


  useEffect(() => {

    if (footerProps) {

      if (footerProps.aboutLinks) setAboutLinks(footerProps.aboutLinks);
      if (footerProps.howItWorksLinks) setHowItWorksLinks(footerProps.howItWorksLinks);
      if (footerProps.communityLinks) setCommunityLinks(footerProps.communityLinks);
      if (footerProps.getInvolved) setInvolvedLinks(footerProps.getInvolved);
      if (footerProps.contact) setContactLink(footerProps.contact);
      if (footerProps.technicalFeedbackLink) setTechnicalFeedback(footerProps.technicalFeedbackLink);

    }
  }, [footerProps]);

  useEffect(() => {
    if (technicalFeedback){
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
    (<footer className={styleName} role="contentinfo" aria-label="footer">

      <div className="page-container">
        <div className="footer__top">
          <Banner />
        </div>


        <div className="footerwrapper">
          <div className="footer__column">
            <Title title="Our stakeholders" />
            {/*<CreateImgTag/> build grid if we don't want a fluid flow*/}
            <div>logos grid</div>
          </div>

          <FooterColumn links={[{ ...involved.link, external: true }]} title={involved.title} externalLink={true}/>
          <FooterColumn links={[contactUs.link]} title={contactUs.title} subSection={technicalSection}/>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="page-container">
          <div className="footerwrapper">
            <FooterColumn links={about.links} title={about.title} />
            <FooterColumn links={howItWorks.links} title={howItWorks.title}/>
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
