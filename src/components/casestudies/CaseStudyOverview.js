import {Link} from "react-router-dom";

const CaseStudyOverview = ({CaseStudy, description, slugfield}) => {
  const {title} = CaseStudy;

  return (
    <li>
        <Link to={`case-studies/${slugfield}`}>
          <h2>{title}</h2>
          <p className="case-study-description">{description}</p>
        </Link>
      </li>
  )
};

export default CaseStudyOverview;