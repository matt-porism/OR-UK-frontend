
import LeftRight from '../container';
import ContentPage from "../page";

function CommunityPage({ communityProps, styleName }) {
    
    //loops to write links
    const { title, introParagraph, link } = communityProps.communityPage;
    const data = [{sectionHeading: title, sectionBody: introParagraph}];
    let linkLeft = link;
    console.log(data, linkLeft);
 
    return (
       
        <main className={styleName}>
           <ContentPage title={title} introParagraph={introParagraph}/>
           <LeftRight
          left={
            <section className="left">Who is using Open Referral UK?</section>
          }
          right={
            <section className="right">Community forum</section>
          } />
          <LeftRight
          left={
            <section className="left">Case Studies</section>
          }
          right={
            <section className="right">Who we are</section>
          } />
            <LeftRight
          left={
            <section className="left">Join Our community</section>
          } />
        </main>

    );
}
    export default CommunityPage;