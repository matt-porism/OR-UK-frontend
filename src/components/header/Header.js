import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '../../assets/logo.png';

const Header = ({mainMenu, topMenuId}) => {
  const menuItems = mainMenu.map(function (name, index) {
    let cssClass = 'nav-item';

    // apply active class if we are on the current
    if (mainMenu[index] != null && mainMenu[index].id === topMenuId) {
      cssClass += ' active';
    }

    return (
      <li className={cssClass} key={mainMenu[index].link}>
        <Link className="nav-link" to={mainMenu[index].link}>
          {mainMenu[index].label}
        </Link>
      </li>
    );
  })

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
                {menuItems}
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;