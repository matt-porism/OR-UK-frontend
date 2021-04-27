import React from 'react';
import Section from '../section/index';
import Who from './Who';
import InjectHtml from './InjectHtml';
import PropTypes from 'prop-types';
import CardList from '../cardlist/';
import Title from '../shared/title';

//refactoring
//look at structure of api response for page

function HomePage( {homePageProps, classname }) {

    //const [headText, setHeaderText] = useState(homePageProps);
    const  {  
        heroBanner: {body, title}, 
        PullQuote: { quote},
       BenefitsAndOpportunities,
       introParagraph,
       caseStudiesLink,
       benefitsSection
         }  = homePageProps;
  
   
    let styleName;
    console.log(styleName, caseStudiesLink)
    let caseStudyLinks = [];
    caseStudyLinks.push(caseStudiesLink);
    //convert to array will be array anyway
   
    
    return (
       
        <main className={classname}>
            <Section headingText={title} bodyText={body} styleName="section" />
            <InjectHtml paragraphText={introParagraph}/>
             {/*{anchorLabel && <Link className="nav-link" to={anchorLink}>
          {anchorLabel}        </Link>}*/}
           
            { quote && <figure  role="figure" className="figure"><blockquote>{homePageProps.PullQuote.quote}</blockquote></figure>}
            { BenefitsAndOpportunities &&  <InjectHtml paragraphText={ BenefitsAndOpportunities}/>}
        
        { homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox}  /> }

        {/*benefitsSection && <Title title={benefitsSection.title}/>}
        {benefitsSection.introParagraph && <p>{benefitsSection.introParagraph}</p>}
        {benefitsSection && benefitsSection.benefits &&
                         <div id={`${benefitsSection.id}_title`} className="cardgrid">
                             
                        <CardList key={benefitsSection.id} bodyText={benefitsSection.benefits.benefitText} paragraphTextList={benefitsSection.benefits} contentImage={benefitsSection.benefits.icon}/>
                        </div>
        */}

     
        
    <hr/>
        {caseStudiesLink &&
                         <div id={`${caseStudiesLink.id}_title`} className="cardgrid">
                              <CardList key={caseStudiesLink.id} itemList={caseStudyLinks} />
                        
                        </div>
        }
        
        
        </main>
    );
}

HomePage.propTypes = {
    links: PropTypes.array
}
    export default HomePage;