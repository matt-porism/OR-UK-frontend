import { Link } from "react-router-dom";

const Banner = () => {

return (
<div className="banner">
    <Link to="/">Open Referral UK</Link>
    <a href="/developers" className="oruktools">
        For developers
    </a>
</div>
    )
}
export default Banner;