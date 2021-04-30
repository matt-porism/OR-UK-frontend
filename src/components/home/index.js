import React from 'react';
import Section from '../section/index';
import Who from './Who';
import InjectHtml from './InjectHtml';
import PropTypes from 'prop-types';
import CardList from '../cardlist/';
import Title from '../shared/title';
import { Link } from 'react-router-dom';

//refactoring
//look at structure of api response for page

function HomePage({ homePageProps, classname }) {

    //const [headText, setHeaderText] = useState(homePageProps);
    const {
        heroBanner: { body, title },
        PullQuote: { quote },
        BenefitsAndOpportunities,
        introParagraph,
        caseStudiesLink,
        benefitsSection
    } = homePageProps;


    //let styleName;
    let caseStudyLinks = [];
    caseStudyLinks.push(caseStudiesLink);
    //convert to array sounds like will be array anyway single object

    return (

        <main id="content" className="main-container">
            <div className="page-container">
                <Section headingText={title} bodyText={body} styleName="section" />
                <InjectHtml paragraphText={introParagraph} />
                {caseStudiesLink && caseStudiesLink.id && <p id="case-studies" className="card-content"><Link to={caseStudiesLink.url}>{caseStudiesLink.TextToDisplay}</Link></p>}&nbsp;
            </div>

            {quote && <figure role="figure" className="figure-block">
                <div className="page-container">
                    <div className="format">
                        <blockquote>{homePageProps.PullQuote.quote}</blockquote>
                        <figcaption>{homePageProps.PullQuote.Attribution && homePageProps.PullQuote.Attribution}</figcaption>
                    </div>
                </div>
            </figure>}

            <div className="page-container">
            
                {BenefitsAndOpportunities && <InjectHtml paragraphText={BenefitsAndOpportunities} />}

                {homePageProps.CommunityStatsBox && homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox} />}

                {benefitsSection && benefitsSection.title && <Title title={benefitsSection.title} />}
                {benefitsSection && benefitsSection.introParagraph && benefitsSection.benefits && <p>{benefitsSection.introParagraph}</p>}
                {benefitsSection && benefitsSection.benefits &&
                    <div id={`${benefitsSection.id}_title`} className="cardgrid">

                        <CardList key={benefitsSection.id} bodyText={benefitsSection.benefits.benefitText} paragraphTextList={benefitsSection.benefits} contentImage={benefitsSection.benefits.icon} />
                    </div>
                }
                <hr />
                {/* this content does not seem to be in the backend yet reviewing, should be the learn about and features link
         &&
                        ( <div id={`${caseStudiesLink.id}_title`} className="cardgrid">
                              <CardList key={caseStudiesLink.id} itemList={caseStudyLinks} />
                        
                        </div>)
       */ }
       </div>

        </main>
    );
}

HomePage.propTypes = {
    links: PropTypes.array
}
export default HomePage;