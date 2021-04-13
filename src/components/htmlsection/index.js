import ReactMarkdown from 'react-markdown';
import InjectHtml from '../home/InjectHtml';



const HtmlSection = ({sections}) => {

    return ( <div>
    {sections.map((item, index) => {
       return <>
             <InjectHtml key={`${index}head`} paragraphText={item.sectionHeading}/>
             <InjectHtml key={`${index}body`} paragraphText={item.sectionBody}/>
         </>
    })}
   
   </div>
   
        )
    }
    export default HtmlSection;

