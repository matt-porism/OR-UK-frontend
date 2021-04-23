import logo from "../../assets/oruk_logo_white.svg"
import { Link } from "react-router-dom";

const Banner = () => {

return (
<div className="banner">
    <Link to="/"><img src={logo} alt="Open referral logo" /></Link>
    <a href="/developers" className="oruktools">
        For developers
    </a>
</div>
    )
}
export default Banner;