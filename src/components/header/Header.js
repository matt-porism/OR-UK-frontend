import logo from "../../assets/oruk_logo_green.svg";
import iconMenu from "../../assets/icon-menu.svg";
import Navigator from  '../navigator/Navigator';
import { Link } from "react-router-dom";

const Header = ({mainMenu,topMenuId}) => {

  return (
    <header className="header">
        <Link to="/"><img src={logo} alt="Open Referral UK" className="header__logo" /></Link>
        <button className="button button-secondary button-header"> <img src={iconMenu} alt=""></img> Menu</button>
        <Navigator mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
    </header>
  );
}

export default Header;