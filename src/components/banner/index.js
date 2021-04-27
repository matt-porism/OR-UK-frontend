import logo from "../../assets/oruk_logo_white.svg"
import { Link } from "react-router-dom";
import LinkExternal from "../footer/LinkExternal";


const Banner = () => {

    const link = {
        url:"https://developers.openreferraluk.org",
        TextToDisplay: "For developers",
        labelText: "For developers",
        external: true
      }

return (
<div className="banner">
    <Link to="/"><img src={logo} alt="Open referral logo" /></Link>
    {/**extract to small component for header and footer */}
    <div className="oruktools"><LinkExternal link={link} rel="noreferrer" styleName="oruktools" /></div>
</div>
    )
}
export default Banner;