import { Fragment } from 'react';
import InjectHtml from '../home/InjectHtml';

const HtmlSection = ({sections}) => {

    return ( 

        sections.map((item, index) => {
        return <Fragment key="itemkey">
             <InjectHtml itemKey={`${index}head`} paragraphText={item.sectionHeading}/>
             <InjectHtml itemKey={`${index}body`} paragraphText={item.sectionBody}/>
         </Fragment>
        })
        )
    }
    export default HtmlSection;

