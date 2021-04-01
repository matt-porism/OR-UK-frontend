import React, { Component } from 'react'
import './header.scss'
import Logo from '../../assets/logo.png'

export interface HeaderProps {
    mainMenu: array;
	topMenuId?: number;
}

export class Header extends Component<HeaderProps> {
  render() {
	const { mainMenu, topMenuId } = this.props;
    return (
      <header className="pt-3">
        <div className="container-fluid">
          <div>
            <img src={Logo} alt="Open Referral Logo"/>
          </div>
        </div>
		<div id="main_content_wrap" className="outer">
		<section><div className="navbackground">
    <nav className="navbar navbar-expand-md navwidth navbar-dark pl-2"><ul className="navbar-nav mr-auto">
		{mainMenu.map(function(name, index){
			var cssClass = 'nav-item';
			
			if (mainMenu[index] != null && mainMenu[index].id === topMenuId)
			{
				cssClass += ' active';
			}
            return <li className={cssClass} key={mainMenu[index].link}><a className="nav-link" href={mainMenu[index].link}>{mainMenu[index].label}</a></li>;
        })}
        </ul>		
    </nav>
</div>
</section></div>
      </header>
    )
  }
}

export default Header