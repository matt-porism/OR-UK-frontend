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
  
   
    //let styleName;
    let caseStudyLinks = [];
    caseStudyLinks.push(caseStudiesLink);
    //convert to array sounds like will be array anyway single object
   
    return (
       
        <main className="main-container">
             <div className="page-container">
            <Section headingText={title} bodyText={body} styleName="section" />
            <InjectHtml paragraphText={introParagraph}/>
             {<p id="case-studies" className="card-content">Placeholder</p>}&nbsp;
           
            { quote && <figure  role="figure" className="figure"><blockquote>{homePageProps.PullQuote.quote}</blockquote><p>{homePageProps.PullQuote.Attribution && homePageProps.PullQuote.Attribution}</p></figure>}
            { BenefitsAndOpportunities &&  <InjectHtml paragraphText={ BenefitsAndOpportunities}/>}
        
        { homePageProps.CommunityStatsBox && homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox}  /> }

        {benefitsSection && benefitsSection.title && <Title title={benefitsSection.title}/>}
        {benefitsSection && benefitsSection.introParagraph &&  benefitsSection.benefits && <p>{benefitsSection.introParagraph}</p>}
        {benefitsSection && benefitsSection.benefits &&
                         <div id={`${benefitsSection.id}_title`} className="cardgrid">
                             
                        <CardList key={benefitsSection.id} bodyText={benefitsSection.benefits.benefitText} paragraphTextList={benefitsSection.benefits} contentImage={benefitsSection.benefits.icon}/>
                        </div>
        }
    <hr/>
        {caseStudiesLink && caseStudiesLink.id > 0 &&
                        ( <div id={`${caseStudiesLink.id}_title`} className="cardgrid">
                              <CardList key={caseStudiesLink.id} itemList={caseStudyLinks} />
                        
                        </div>)
        }
</div>
        </main>
    );
}

HomePage.propTypes = {
    links: PropTypes.array
}
    export default HomePage;