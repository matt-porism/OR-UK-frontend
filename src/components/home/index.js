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
    //convert to array will be array anyway
   
    
    return (
       
        <main className={classname}>
            <Section headingText={title} bodyText={body} styleName="section" />
            <InjectHtml paragraphText={introParagraph}/>
             {/*<p>Read our case studies</p>*/}
           
            { quote && <figure  role="figure" className="figure"><blockquote>{homePageProps.PullQuote.quote}</blockquote></figure>}
            { BenefitsAndOpportunities &&  <InjectHtml paragraphText={ BenefitsAndOpportunities}/>}
        
        { homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox}  /> }

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
        
        
        </main>
    );
}

HomePage.propTypes = {
    links: PropTypes.array
}
    export default HomePage;