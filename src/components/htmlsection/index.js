import InjectHtml from '../home/InjectHtml';



const HtmlSection = ({sections}) => {

    return ( <div>
    {sections.map((item, index) => {
       return <>
             <InjectHtml fix={`${index}head`} paragraphText={item.sectionHeading}/>
             <InjectHtml fix={`${index}body`} paragraphText={item.sectionBody}/>
         </>
    })}
   
   </div>
   
        )
    }
    export default HtmlSection;

