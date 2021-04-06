import React, { Component } from 'react';
import './footer.scss'
import Logo from '../../assets/logo.png'


class componentName extends Component {
  render() {
	const { mainMenu } = this.props;
	  
    return (
      <footer className="footer pt-3">
        <div className="container-fluid">
		<div className="row mb-3">
			<div className="col-6"><img src={Logo} alt="Open Referral UK Logo"/></div>
			<div className="col-6 text-right"><a className="text-white" href="/">Documentation and Tools</a></div>
		</div>
		<div className="row">
			<div className="col-4">
				<div className="row">
				<div className="col-12">
				<h5>General Enquiries</h5>
				</div>
				<div className="col-12 mt-1">
				<a href="mailto:hello@openreferraluk.org" className="text-white">hello@openreferraluk.org</a>
				</div><div className="col-12 mt-1">
				<h5>Submit issues or feedback</h5>
				</div><div className="col-12">
				<a className="text-white" href="https://github.com/OpenReferralUK/human-services/">Github</a>
			</div></div>
			</div>
			<div className="col-4"><h5>Governance Board</h5>
			<div className="row">
			<div className="col-6">Logo</div>
			<div className="col-6">Logo</div>
			</div>
			<div className="row">
			<div className="col-6">Logo</div>
			<div className="col-6">Logo</div>
			</div>
			</div>
			<div className="col-4"><ul className="list-unstyled">
		{mainMenu.map(function(name, index){			
			if (!mainMenu[index].ShowOnFooter)
			{
				return;
			}
            return <li key={mainMenu[index].link}><a className="text-white" href={mainMenu[index].link}>{mainMenu[index].label}</a></li>;
        })}
        </ul>	</div>
		</div>
		<div className="row mt-4 pb-3 pt-3 final-footer">
			<div className="col-7">Copyright 2019-2021 Open Referral UK</div>
			<div className="col-3 text-right"><a className="text-white" href="/">Terms and conditions</a></div>
			<div className="col-2 text-right"><a className="text-white" href="/">Privacy policy</a></div>
			</div>
        </div>
      </footer>
    );
  }
}

export default componentName;
