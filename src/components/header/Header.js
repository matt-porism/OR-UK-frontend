import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '../../assets/logo.png';

export interface HeaderProps {
  mainMenu: array;
  topMenuId?: number;
}

export class Header extends Component<HeaderProps> {
  render() {
    const { mainMenu, topMenuId } = this.props;
    return (
      <header>
        <div className="container-fluid">
          <div>
            <img src={Logo} alt="Open Referral Logo" />
          </div>
        </div>
        <div id="main_content_wrap" className="outer">
          <section>
            <div className="navbackground">
              <nav className="navbar navbar-expand-md navwidth navbar-dark">
                <ul className="navbar-nav mr-auto">
                  {mainMenu.map(function (name, index) {
                    var cssClass = 'nav-item';

                    if (
                      mainMenu[index] != null &&
                      mainMenu[index].id === topMenuId
                    ) {
                      cssClass += ' active';
                    }
                    return (
                      <li className={cssClass} key={mainMenu[index].link}>
                        <Link className="nav-link" to={mainMenu[index].link}>
                          {mainMenu[index].label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </header>
    );
  }
}

export default Header;
