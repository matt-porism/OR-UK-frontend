import React, { Component } from 'react';
import Header from '../header/Header';
import './footer.scss'
import Logo from '../../assets/logo.png'


class componentName extends Component {
  render() {
	const { mainMenu } = this.props;
	  
    return (
      <footer className="footer">
        <Header />
        <div className="parent">   
          <div>&copy; 2019-2021 Open Referral UK</div>
          <div className="oruktools">
            <ul>
              <li> Terms &amp; Conditions</li>
              <li>Pivacy Policy</li>
            </ul>
            </div>
        
        </div>
      </footer>
    );
  }
}

export default componentName;
