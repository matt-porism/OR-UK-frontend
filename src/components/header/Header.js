import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <div className="parent">
        <Link to="/"><img src="/OpenReferralUK.png" alt="Open referral logo" /></Link>
        <a href="/developers" className="oruktools">
          For developers
        </a>
      </div>
    </header>
  );
}

export default Header;