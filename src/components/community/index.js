
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
            <section className="left">Open Referral UK is a community-led data standard, our community can help you to adopt the standard</section>
          }
          right={
            <section className="right">Open Referral UK is a community-led data standard, our community can help you to adopt the standard</section>
          } />
           <LeftRight
          left={
            <section className="left">Open Referral UK is a community-led data standard, our community can help you to adopt the standard</section>
          }
          right={
            <section className="right">Open Referral UK is a community-led data standard, our community can help you to adopt the standard</section>
          } />
           <LeftRight
          left={
            <section className="left">Open Referral UK is a community-led data standard, our community can help you to adopt the standard</section>
          }
          right={
            <section className="right">Open Referral UK is a community-led data standard, our community can help you to adopt the standard</section>
          } />
       
        </main>

    );
}
    export default CommunityPage;