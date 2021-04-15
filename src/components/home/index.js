import { useState } from 'react';
import Section from '../section/index';
import Who from './Who';
import InjectHtml from './InjectHtml';
import Learn from './Learn';
import PropTypes from 'prop-types';

function HomePage({ homePageProps, classname }) {


    let nextLinks = (<></>);
	if (homePageProps.ReadNextLinks){
		nextLinks = <><hr/>{homePageProps.ReadNextLinks.map(x => (<div key={x.url} className="NextLink"><a href={x.url}>{x.TextToDisplay}</a></div>))}</>
	}

    //const [headText, setHeaderText] = useState(homePageProps);
    
    const [links] = useState([{TextToDisplay: "Learn about how it works Learn about how it works", url:"/go", id:"1"}]);
    const [rightBox] = useState([{TextToDisplay:"Find more on the data structure, API reference and developer tools", url:"/home", id: 2}]);
    return (
        <main className={classname}>
            <Section headingText={homePageProps.heroBanner.title} bodyText={homePageProps.heroBanner.body} styleName="section" />
            <InjectHtml paragraphText={homePageProps.introParagraph}/>
             {/*{anchorLabel && <Link className="nav-link" to={anchorLink}>
          {anchorLabel}        </Link>}*/}
           
            {homePageProps.PullQuote.quote && <figure className="figure"><blockquote>{homePageProps.PullQuote.quote}</blockquote></figure>}
           

         {homePageProps.BenefitsAndOpportunities &&  <InjectHtml paragraphText={homePageProps.BenefitsAndOpportunities}/>}
        
        { homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox}  /> }
        <Learn left={true} leftList={links} right={true} rightList={rightBox}/>
        </main>

    );
}
HomePage.propTypes = {
    links: PropTypes.array
}
    export default HomePage;