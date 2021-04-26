import logo from "../../assets/oruk_logo_green.svg";
import Navigator from '../navigator/Navigator';
import { Link } from "react-router-dom";

const Header = ({ mainMenu, topMenuId }) => {

  return (
    <header className="global-header">
      <div className="global-header__top-container">
        <Link to="/"><img src={logo} alt="Open Referral UK" className="global-header__logo" /></Link>
        <button className="button button-secondary button-header hide-md">
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H0V3H20V0Z" fill="#135E75" />
            <path d="M20 6H0V9H20V6Z" fill="#135E75" />
            <path d="M20 12H0V15H20V12Z" fill="#135E75" />
          </svg>
          Menu
        </button>
        <a href="/developers" className="button button-secondary button-header show-md">
          For developers
        </a>
      </div>
      <Navigator mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
    </header>
  );
}

export default Header;