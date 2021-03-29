import React, { Component } from 'react'
import './header.scss'
import Logo from '../../assets/logo.png'
import ScriptTag from 'react-script-tag';


export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="title">
            <h1>Open Referral UK Data Standard</h1>
            <p>Setting the open standard for community data</p>
          </div>
          <div>
            <img src={Logo} alt="logo"/>
          </div>
        </div>
		<div id="main_content_wrap" className="outer">
		<section><div className="navbackground">
    <nav className="navbar navbar-expand-md navwidth navbar-dark">
        <a className="navbar-brand" href="/">Open Referral UK</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar_expand" aria-controls="navbar_expand" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar_expand">
            <ul className="navbar-nav mr-auto">
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Data standard
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<a className="dropdown-item" href="/Reference/">Reference</a>
						<a className="dropdown-item" href="/Guidance/">Guidance</a>
						<a className="dropdown-item" href="/UseOfTaxonomies/">Use of taxonomies</a>
						<a className="dropdown-item" href="/Validation/">Aggregation, deduplication and validation</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						API
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<a className="dropdown-item" href="/ApiReference/">Reference</a>
						<a className="dropdown-item" href="/API-Guidance/">Guidance</a>   
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Tools
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<a className="dropdown-item" href="/ToolsReference/">Reference</a>
						<a className="dropdown-item" href="https://validator.openreferraluk.org/" target="_blank" rel="noreferrer">API Validator</a>
						<a className="dropdown-item" href="https://exporter.openreferraluk.org/" target="_blank" rel="noreferrer">API Exporter</a>
						<a className="dropdown-item" href="https://tools.openreferraluk.org/APIConnector/" target="_blank" rel="noreferrer">API Connector</a>
						<a className="dropdown-item" href="https://tools.openreferraluk.org/ApiQuery/" target="_blank" rel="noreferrer">API Query Tool</a>
						<a className="dropdown-item" href="https://tools.openreferraluk.org/ServiceFinder/" target="_blank" rel="noreferrer">Service Finder</a>   
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						About
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/About/">About</a>
								<a className="dropdown-item" href="/ContactUs/">Contact us</a>
								<a className="dropdown-item" href="/Governance/">Governance</a>                               
								<a className="dropdown-item" href="/TechGroup/">Technical group terms of reference</a>
					</div>
				</li>
        </ul>		
    </div></nav>
</div>
</section></div>
<ScriptTag async defer type="text/javascript" src={process.env.PUBLIC_URL + '/menu.js'} />
      </header>
    )
  }
}

export default Header