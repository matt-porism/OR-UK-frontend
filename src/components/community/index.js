
import Learn from '../home/Learn';
import ContentPage from "../page";
import { useEffect, useState} from "react";

function CommunityPage({ communityProps, styleName }) {
    
    //loops to write links
    const { title, id, introParagraph, links } = communityProps.communityPage;
    const data = [{sectionHeading: title, sectionBody: introParagraph}];
    let linkLeft = links;
    console.log("In community links ", links)

  const [splitArray, setSplitArray] = useState([]);
  const [nextLinks] = useState(links);

  let style;
   let itemCount = 2;
  useEffect(() => {
    console.log("effect ", nextLinks);
    const listBoxLinks = [...links];

    let rowItems = [];
    while(listBoxLinks.length) {
        rowItems.push(listBoxLinks.splice(0,2))
    }

    setSplitArray(rowItems)

},[links]);
  
 
    return (
       
        <main className={styleName}>
           <ContentPage title={title} introParagraph={introParagraph}/>
           {/* should form part of content page so can be reused with props */}
           { splitArray && splitArray.length > 0 && splitArray.map ((array, index) => {
             style = splitArray[index].length === itemCount ?  "listbox" : "listboxsingle";
                return  <div className={style} key={index}>
                <Learn styleName={style} list={array}/>
                </div>
              }) 
          }
         
        </main>

    );
}
    export default CommunityPage;

    
      