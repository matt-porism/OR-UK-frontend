import logo from "../../assets/oruk_logo_green.svg";
import { Link } from "react-router-dom";
import LinkExternal from '../footer/LinkExternal';

const Header = () => {
   const link = {
     url:"https://developers.openreferraluk.org",
     TextToDisplay: "For developers",
     labelText: "For developers"
   }
  return (
    <header className="header" role="banner" aria-label="Header">
      <div className="parent">
        <Link to="/"><img src={logo} alt="Open referral logo" /></Link>
        <div className="oruktools"><LinkExternal link={link} rel="noreferrer" target="_blank" styleName="oruktools" /></div>
      </div>
    </header>
  );
}

export default Header;