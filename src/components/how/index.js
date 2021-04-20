import Learn from '../home/Learn';
import HtmlSection from '../htmlsection';
// import { useState } from 'react'; refactor
import useFetch from '../../helpers/dataFetch';

const HowPage =  ({ styleName}) => {

    //BASE_URL= process.env.REACT_APP_BASE_URL
    //BASE_URL= process.env.REACT_APP_HOW_URL

    //add error handling when not url's

    //refactor for state use reducer
    const itemCount = 2;
    let style;
    //const [splitArray, setSplit] = useState([]);
    let arrayStruct;
    //const [data, setData] = useState({});

    const used = (linksList) => {
        let rowItems = [];
        const local = [...linksList];
        while(local.length) {
            rowItems.push(local.splice(0,itemCount))
        }
        return rowItems;
    }
       
       let splitArray;

        const [{data, isError}] = useFetch("https://admin.beta.openreferraluk.org/how-it-works-page");

        if ( Object.keys(data).length > 0)
        {
            const { HowItWorks: { title, introParagraph, links }  } = data;
            arrayStruct = [{sectionHeading: title, sectionBody: introParagraph}];
          splitArray = used(links);
            
      }

    return ( 
        isError ? null :
       (
        <main className={styleName}> 
        { arrayStruct && <HtmlSection sections={arrayStruct} /> }

            { splitArray && splitArray.length > 0 && splitArray.map ((array, index) => {
             style = splitArray[index].length === itemCount ?  "listbox" : "listboxsingle";
                return  <div className={style} key={index}>
                <Learn styleName={style} list={array}/>
                </div>
              }) 
          }
        </main>
        )
    );
}
    export default HowPage;