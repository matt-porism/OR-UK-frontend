
import Banner from '../banner';
import Title from './tiles';
import { useEffect, useState } from 'react';
import LinkExternal from './LinkExternal';
import LinksList from "../links/LinksList";
import FooterColumn from './column';
//review refactor
//todo - terms and conditions policy to go into grid

const Footer =  ({ footerProps, styleName }) => {
 
const [about, setAboutLinks] = useState({});
const [howItWorks, setHowItWorksLinks] = useState({});
const [community, setCommunityLinks] = useState({});
const [involved, setInvolvedLinks] = useState({});
const [contactUs, setContactLink] = useState({});


useEffect(() => {
 
  if (footerProps) {

    if (footerProps.aboutLinks) setAboutLinks(footerProps.aboutLinks);
    if (footerProps.howItWorksLinks) setHowItWorksLinks(footerProps.howItWorksLinks);
    if (footerProps.communityLinks) setCommunityLinks(footerProps.communityLinks);
    if (footerProps.getInvolved) setInvolvedLinks(footerProps.getInvolved);
    if (footerProps.contact) setContactLink(footerProps.contact);

  }
}, [footerProps]);

  // there is an id property if needed when refactored
  
    return (
      Object.keys(about).length > 0 &&
      (<footer className={styleName}>
       
        <div className="footergrid">
        <Banner />
          
        </div>
        <div className="footerwrapper">

        <div>
            <Title title="Governance board"/>
           
              {/*<CreateImgTag/> build grid if we don't want a fluid flow*/}
          
          <Title title={involved.title}/>
          
          <Title title={contactUs.title} />
           
          <div>logos</div>
          <div> <LinkExternal link={involved.link} rel="noreferrer" target="_blank" /></div>
          <ul key={contactUs.id}><LinksList list={contactUs.link}/></ul>
    
        </div>
        </div>
        
        <div className="footerwrapper">
            <div>
            <Title title={about.title}/>
                <Title title={howItWorks.title}/>
                <Title title={community.title}/>
               
                          <div>  { about.links && about.links.map( link => {
                              return <ul key={link.id}><LinksList list={link}/></ul>
                            })
                          }</div>
                            <div>
              <FooterColumn links={howItWorks.links}/>
             
            </div>
            <div>
            { 
              community.links.map(link => {
                return <ul key={link.id}><LinksList list={link}/></ul>
              })}
            </div>
            </div>
          
           
          </div>
          <div className="footnotegrid">
          <div className="copy">&copy; 2019-2021 Open Referral UK</div>
          <div> <ul>
              <li key="1"> Terms &amp; Conditions</li>
              <li key="2">Privacy Policy</li>
            </ul></div>
            </div>

      </footer>)
    );
  
}

export default Footer;
