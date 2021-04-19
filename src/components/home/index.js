import { useEffect, useState } from 'react';
import Section from '../section/index';
import Who from './Who';
import InjectHtml from './InjectHtml';
import Learn from './Learn';
import PropTypes from 'prop-types';

function HomePage( {homePageProps, classname }) {

    //const [headText, setHeaderText] = useState(homePageProps);
    const  { ReadNextLinks,  
        heroBanner: {body, introParagraph, title}, 
        PullQuote: { quote},
       BenefitsAndOpportunities,
         }  = homePageProps;

    const [splitArray, setSplit] = useState([]);
    const [links] = useState(ReadNextLinks)
   
    useEffect(() => {
        console.log("effect ", links);
        const listBoxLinks = [...links];

        let rowItems = [];
        while(listBoxLinks.length) {
            rowItems.push(listBoxLinks.splice(0,2))
        }
    
        setSplit(rowItems)

    },[links]);
    let styleName;
    
    return (
       
        <main className={classname}>
            <Section headingText={title} bodyText={body} styleName="section" />
            <InjectHtml paragraphText={introParagraph}/>
             {/*{anchorLabel && <Link className="nav-link" to={anchorLink}>
          {anchorLabel}        </Link>}*/}
           
            { quote && <figure className="figure"><blockquote>{homePageProps.PullQuote.quote}</blockquote></figure>}
            { BenefitsAndOpportunities &&  <InjectHtml paragraphText={ BenefitsAndOpportunities}/>}
        
        { homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox}  /> }
        
        { splitArray.map ((array, index) => {
             styleName = splitArray[index].length === 2 ?  "listbox" : "listboxsingle";
           return  <div className={styleName} key={index}>
            <Learn list={array} />
            </div>
        })}
        </main>
    );
}

HomePage.propTypes = {
    links: PropTypes.array
}
    export default HomePage;