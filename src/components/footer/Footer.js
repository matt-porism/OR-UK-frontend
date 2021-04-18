
import Banner from '../banner';
import Title from './tiles';


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

 const Footer =  () => {
  
    return (
      <footer className="footer">
        <Banner />
        <div className="footergrid">
          <div className="foot-one">
            <Title title="Governance board"/>
           
              <CreateImgTag/>
           
            </div>
          <div className="foot-two">
          <Title title="Get involved"/>
          <a href="/home">Get involved</a>
            </div>
          <div className="foot-three">
          <Title title="Contact us" />
          <a href="/home">Implementation support</a>
          </div>  
          <div className="copy">&copy; 2019-2021 Open Referral UK</div>
          <div> <ul>
              <li> Terms &amp; Conditions</li>
              <li>Pivacy Policy</li>
            </ul>
            </div>
        </div>
        
      </footer>
    );
  
}

export default Footer;
