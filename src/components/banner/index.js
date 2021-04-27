import logo from "../../assets/oruk_logo_white.svg"
import { Link } from "react-router-dom";

const Banner = () => {

return (
<div className="banner">
    <Link to="/" className="footer__logo"><img src={logo} alt="Open Referral UK" /></Link>
    <a href="/developers" className="button button-primary button-small button-light">
        For developers
    </a>
</div>
    )
}
export default Banner;