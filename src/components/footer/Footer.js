import React, { Component } from 'react';
import Banner from '../banner';


class Footer extends Component {
  render() {
	  
    return (
      <footer className="footer">
        <Banner />
        <div className="footergrid">
          <div className="foot-one">
            <div className="about">General enquiries</div>
            <div className="about">hello@openreferraluk.org</div>
            </div>
          <div className="foot-two">
            <div className="about">Governance board</div>
            </div>
          <div className="foot-three">
          <div className="about">About</div>
          <div><ul><li>Home</li><li>About</li><li>How it works</li><li>Getting Started</li><li>Who we are</li><li>Contact us</li></ul></div></div>  {/*refactor make api call*/}
          <div className="copy">&copy; 2019-2021 Open Referral UK</div>
          <div> <ul>
              <li> Terms &amp; Conditions</li>
              <li>Pivacy Policy</li>
            </ul></div>
        </div>
        
      </footer>
    );
  }
}

export default Footer;
