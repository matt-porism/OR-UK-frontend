import { useState } from 'react';
import Section from '../section/index';
import { Link } from 'react-router-dom';
import { HeadedList } from '../list';
import Who from './Who';
import InjectHtml from './InjectHtml';
import Learn from './Learn';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

function HomePage({ homePageProps, classname }) {

    const cleanMarkup = (dirty) => {
        const clean = DOMPurify.sanitize(dirty);
        console.log('cleaned in home', clean)
        return clean;
    
    }

    const [headText, setHeaderText] = useState(homePageProps);
    //const [links, setLinks] = useState(["Learn about how it works Learn about how it works", "Find more on the data structure, API reference and developer tools"]);
    return (
        <main className={classname}>
            <Section headingText={homePageProps.heroBanner.title} bodyText={homePageProps.heroBanner.body} styleName="section" />
            <InjectHtml paragraphText={homePageProps.introParagraph}/>
           
            {homePageProps.PullQuote.quote && <figure className="figure"><blockquote>{homePageProps.PullQuote.quote}</blockquote></figure>}
            {/*{anchorLabel && <Link className="nav-link" to={anchorLink}>
          {anchorLabel}        </Link>}*/}
         {homePageProps.BenefitsAndOpportunities && <p dangerouslySetInnerHTML={{ __html: cleanMarkup(homePageProps.BenefitsAndOpportunities) }}></p>}
        
        { homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox}  /> }
        {/*<Learn left={true} right={true}>
            {links.map((link, index) => {
                    <li className="aclass" key={index}>
                    <Link to={link.target}>{link.label}</Link>
                    </li>
                })
            }
        </Learn>*/}
        </main>

    );
}
HomePage.propTypes = {
    links: PropTypes.array
}
    export default HomePage;