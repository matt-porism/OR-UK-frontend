import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <div className="parent">
        <Link to="/"><img src="/OpenReferralUK.png" alt="Open referral logo"/></Link>
        <a href="/documentation-and-tools" className="oruktools">
          Document &amp; Tools
        </a>
      </div>
    </header>
  );
}

export default Header;