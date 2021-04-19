
import Banner from '../banner';
import Title from './tiles';
import { Link } from 'react-router-dom';
//review refactor

const list=  ["/OpenReferralUK.png","/snook.svg" ]

const CreateImgTag = () => {

 let hold = [];
 for(let i=0; i<=list.length; i=i+2) {
  
   if (i < list.length-1) {
   hold.push(<div key={i} className="row"><div className="column"><img key="1" src={list[i]} aria-label="open refferral logo" /></div><div className="column"><img key="2" src={list[i+1]} alt="open refferral logo" /></div></div>);

 } else {
   //console.log("array length", hold.length)
  hold.push(<div key={i} className="row"><div className="column"><img key="3" src={list[i]} aria-label="open refferral logo" /></div></div>);
 }
 }
 return hold;
}

 const Footer =  ({ footerProps }) => {

  const { aboutLinks: { title, id, links}, howItWorksLinks, communityLinks, getInvolved, contact } = footerProps
  console.log(getInvolved.TextToDisplay, id)
    return (
      <footer className="footer">
        <Banner />
        <div className="footergrid">
          <div className="foot-one">
            <Title title="Governance board"/>
           
              <CreateImgTag/>
           
            </div>
          <div className="foot-two">
          <Title title={getInvolved.title}/>
          <Link key={getInvolved.id} to="/">{getInvolved.link.TextToDisplay}</Link>
            </div>
          <div className="foot-three">
          <Title title={contact.title} />
          <Link key={contact.id} to="/">{contact.link.TextToDisplay}</Link>
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
