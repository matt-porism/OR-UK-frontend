import React from 'react';
import Section from '../section/index';
import Who from './Who';
import InjectHtml from './InjectHtml';
//import Learn from './Learn';
import PropTypes from 'prop-types';

//refactoring
//look at structure of api response for page

function HomePage( {homePageProps, classname }) {

    //const [headText, setHeaderText] = useState(homePageProps);
    const  {  
        heroBanner: {body, title}, 
        PullQuote: { quote},
       BenefitsAndOpportunities,
       introParagraph,
         }  = homePageProps;

    //const [splitArray, setSplit] = useState([]);
  
    
   
    let styleName;
    console.log(styleName)
    
    return (
       
        <main className={classname}>
            <Section headingText={title} bodyText={body} styleName="section" />
            <InjectHtml paragraphText={introParagraph}/>
             {/*{anchorLabel && <Link className="nav-link" to={anchorLink}>
          {anchorLabel}        </Link>}*/}
           
            { quote && <figure  role="figure" className="figure"><blockquote>{homePageProps.PullQuote.quote}</blockquote></figure>}
            { BenefitsAndOpportunities &&  <InjectHtml paragraphText={ BenefitsAndOpportunities}/>}
        
        { homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox}  /> }
        
        
        </main>
    );
}

HomePage.propTypes = {
    links: PropTypes.array
}
    export default HomePage;