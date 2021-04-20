
import Banner from '../banner';
import Title from './tiles';
import { Link } from 'react-router-dom';
//review refactor
//need new component for these links

 const Footer =  ({ footerProps }) => {

  const { aboutLinks: { title, links}, howItWorksLinks, communityLinks, getInvolved, contact } = footerProps
  // there is an id property if needed when refactored
    return (
      <footer className="footer">
        <Banner />
        <div className="footergrid">
          <div className="foot-one">
            <Title title="Governance board"/>
           
              {/*<CreateImgTag/>*/}
           
            </div>
          <div className="foot-two">
          <Title title={getInvolved.title}/>
          <a href={getInvolved.link.url} rel="noreferrer" target="_blank">{getInvolved.link.TextToDisplay}</a>
            </div>
          <div className="foot-three">
          <Title title={contact.title} />
          <Link key={contact.id} to={contact.link.url}>{contact.link.TextToDisplay}</Link>
          </div>  
      
          
        </div>
        <div className="footerwrapper">
            <div>
              {title}
              { links.map( link => {
                return <div key={link.id}><Link to={link.url}>{link.TextToDisplay}</Link> </div>
              })}
            </div>
            <div>{howItWorksLinks.title}
            { 
              howItWorksLinks.links.map(link => {
                return <div key={link.id}><Link to={link.url}>{link.TextToDisplay}</Link> </div>
              })}
            </div>
            <div>{communityLinks.title}
            { 
              communityLinks.links.map(link => {
                return <div key={link.id}><Link to={link.url}>{link.TextToDisplay}</Link> </div>
              })}
            </div>
          </div>
          <div className="copy">&copy; 2019-2021 Open Referral UK</div>
          <div> <ul>
              <li key="1"> Terms &amp; Conditions</li>
              <li key="2">Privacy Policy</li>
            </ul></div>
      </footer>
    );
  
}

export default Footer;
