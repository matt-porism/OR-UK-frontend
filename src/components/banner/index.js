import { Link } from "react-router-dom";

const Banner = () => {

return (
<div className="banner">
    <Link to="/">Openreferral UK</Link>
    <a href="/documentation-and-tools" className="oruktools">
        Document &amp; Tools
    </a>
</div>
    )
}
export default Banner;