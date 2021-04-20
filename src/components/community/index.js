
import Learn from '../home/Learn';
import ContentPage from "../page";
import { useEffect, useState} from "react";

function CommunityPage({ communityProps, styleName }) {
    
  const [splitArray, setSplitArray] = useState([]);
  
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");

 

  let style;
   let itemCount = 2;
  useEffect(() => {
    const { title, introParagraph, links } = communityProps.communityPage;
    //we have an id do we need it?
    //structure looks same as how check out api

    setHeaderText(title);
    setBodyText(introParagraph);

    let listBoxLinks = [...links];

    let rowItems = [];
    while(listBoxLinks.length) {
        rowItems.push(listBoxLinks.splice(0,2))
    }

    setSplitArray(rowItems)

},[communityProps]);
  
 
    return (
       
        <main className={styleName}>
           <ContentPage title={`<h1>${headerText}</h1>`} introParagraph={bodyText}/>
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

    
      