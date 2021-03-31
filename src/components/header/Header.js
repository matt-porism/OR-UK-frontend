import React, { Component } from 'react'
import './header.scss'
import Logo from '../../assets/logo.png'

export interface HeaderProps {
    mainMenu: array;
	subMenuId?: number;
}

export class Header extends Component<HeaderProps> {
  render() {
	const { mainMenu, subMenuId } = this.props;
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
    <nav className="navbar navbar-expand-md navwidth navbar-dark"><ul className="navbar-nav mr-auto">
		{mainMenu.map(function(name, index){
			var cssClass = 'nav-item';
			
			if (mainMenu[index].sub_menu != null && mainMenu[index].sub_menu.id === subMenuId)
			{
				cssClass += ' active';
			}
            return <li className={cssClass} key={mainMenu[index].Link}><a className="nav-link" href={mainMenu[index].Link}>{mainMenu[index].Label}</a></li>;
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