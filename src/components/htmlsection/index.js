import Fragment from 'react';
import InjectHtml from '../home/InjectHtml';

const HtmlSection = ({sections}) => {

    return ( <div>
    {sections.map((item, index) => {
        return (
            <>
                <h2 key={`${index}head`} id={`section-${index+1}-heading`}>
                    {item.sectionHeading}
                </h2>
                <InjectHtml key={`${index}body`} paragraphText={item.sectionBody}/>
            </>
       )
    })}
   
   </div>
   
        )
    }
    export default HtmlSection;

