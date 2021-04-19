import InjectHtml from '../home/InjectHtml';



const HtmlSection = ({sections}) => {

    return ( <div>

    {   
        sections.map((item, index) => {
        return <>
             <InjectHtml itemKey={`${index}head`} paragraphText={item.sectionHeading}/>
             <InjectHtml itemKey={`${index}body`} paragraphText={item.sectionBody}/>
         </>
        })}
   </div>
   
        )
    }
    export default HtmlSection;

