//import { useState } from 'react';
import Section from '../section/index';
import Who from './Who';
import InjectHtml from './InjectHtml';
//import Learn from './Learn';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

function HomePage({ homePageProps, classname }) {

    const cleanMarkup = (dirty) => {
        const clean = DOMPurify.sanitize(dirty);
        console.log('cleaned in home', clean)
        return clean;
    
    }

    let nextLinks = (<></>);
	if (homePageProps.ReadNextLinks){
		nextLinks = <><hr/>{homePageProps.ReadNextLinks.map(x => (<div key={x.url} className="NextLink"><a href={x.url}>{x.TextToDisplay}</a></div>))}</>
	}

    //const [headText, setHeaderText] = useState(homePageProps);
    
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
        {nextLinks}
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