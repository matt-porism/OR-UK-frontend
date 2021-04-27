import HtmlSection from '../htmlsection';
 import { useEffect, useState } from 'react'; 
import useFetch from '../../helpers/dataFetch';

import LinkCard from '../home/card/LinkCard';

const HowPage =  ({ styleName}) => {

    //BASE_URL= process.env.REACT_APP_BASE_URL
    //BASE_URL= process.env.REACT_APP_HOW_URL

    //add error handling when not url's

    //refactor for state use reducer
  
    const [links, setLinks] = useState([]);
    
    const [arrayStruct, setStruct] = useState([]);


        const [{data, isError, isFetching}] = useFetch("https://admin.beta.openreferraluk.org/how-it-works-page");
useEffect(() => {
    if (Object.keys(data).length > 0) {
       
        const { HowItWorks  } = data;
        const { title, introParagraph, links } = HowItWorks;
        setStruct([{sectionHeading: title, sectionBody: introParagraph}]);
        setLinks(links);
       
    }

},[data])
        
    return ( 
        isError  ? null :
       ( !isFetching &&
        <main className={styleName}> 
          <HtmlSection sections={arrayStruct} /> 
             
          {links.length > 0 &&  <div id={"cd_title"} className="cardgrid">
                  { links.map(link => {
                    return  <LinkCard key={`${link.id}_card`} linkItem={link} styleName="card-content" />

                  })  }       
               
            </div>}
        </main>
        )
    );
}
    export default HowPage;