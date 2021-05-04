import {Link} from "react-router-dom";

const CaseStudyOverview = ({CaseStudy, description, slugfield}) => {
  const {title} = CaseStudy;

  return (
    <li>
        <Link to={`case-studies/${slugfield}`}>
          {title}
        </Link>
        <p className="case-study-description">{description}</p>
      </li>
  )
};

export default CaseStudyOverview;