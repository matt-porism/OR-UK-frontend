import { Link } from "react-router-dom";

const Banner = () => {

return (
<div className="banner">
    {/* TODO: this Link should be an image instead of text */}
    <Link to="/">Open Referral UK</Link>
    <a href="/documentation-and-tools" className="oruktools">
        Document &amp; Tools
    </a>
</div>
    )
}
export default Banner;