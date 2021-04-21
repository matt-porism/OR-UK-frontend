import {Link} from "react-router-dom";

const CaseStudyOverview = ({CaseStudy, description, slugfield}) => {
  const {title} = CaseStudy;

  return (
    <Link to={`case-studies/${slugfield}`}>
      <li className="case-study-overview listbox">
        <h2>{title}</h2>
        <p className="case-study-description">{description}</p>
      </li>
    </Link>
  )
};

export default CaseStudyOverview;