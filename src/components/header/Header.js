import logo from "../../assets/oruk_logo_green.svg";
import Navigator from '../navigator/Navigator';
import { Link } from "react-router-dom";
import LinkExternal from '../footer/LinkExternal';

const Header = ({ mainMenu, topMenuId }) => {
  const link = {
    url:"https://developers.openreferraluk.org",
    TextToDisplay: "For developers",
    labelText: "For developers",
    external: true
  }

  return (
    <header className="global-header" role="banner" aria-label="Header">
      <div className="global-header__top-container page-container">
        <Link to="/" className="global-header__logo"><img src={logo} alt="Open Referral UK"/></Link>
        <button className="button button-secondary button-header hide-md">
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H0V3H20V0Z" fill="#135E75" />
            <path d="M20 6H0V9H20V6Z" fill="#135E75" />
            <path d="M20 12H0V15H20V12Z" fill="#135E75" />
          </svg>
          Menu
        </button>
        {/* <a href="/developers" className="button button-secondary button-header show-md">
          For developers
        </a> */}
        <LinkExternal link={link} rel="noreferrer" styleName="button button-secondary button-header show-md" />
      </div>
      <Navigator mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
    </header>
  );
}

export default Header;