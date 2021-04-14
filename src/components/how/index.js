import Learn from '../home/Learn';
import HtmlSection from '../htmlsection';

function HowPage({howProps, styleName}) {

    const { title, introParagraph, link } = howProps.HowItWorks;
    const myStruct = [{sectionHeading: title, sectionBody: introParagraph}];
    let linkLeft = link;
   
    
    return (
        <main className={styleName}> 
        <HtmlSection sections={myStruct} /> 
            {/*<Section headingText={title} bodyText={introParagraph} />*/}
           

        <Learn left={true} leftList={linkLeft} right={false}/>
        </main>

    );
}
    export default HowPage;