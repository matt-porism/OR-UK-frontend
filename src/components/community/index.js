
import LeftRight from '../container';
import ContentPage from "../page";

function CommunityPage({ communityProps, styleName }) {
    
    //loops to write links
      const { title, introParagraph, links } = communityProps.communityPage;
    const data = [{sectionHeading: title, sectionBody: introParagraph}];

    let linkElements = [];
    for (let i=0; i< links.length; i+=2) {
      const leftSection = (
        <section className="left">
          {links[i].TextToDisplay}
        </section>
      )

      const rightSection = links[i + 1] ? (
        <section className="right">
          {links[i+1].TextToDisplay}
        </section>
      ) : null;
      
      linkElements.push(
        (
          <LeftRight
            left={ leftSection }
            right={ rightSection } />
        )
      )
    }

    return (
       
        <main className={styleName}>
           <ContentPage title={title} introParagraph={introParagraph}/>
           {linkElements}
        </main>

    );
}
    export default CommunityPage;