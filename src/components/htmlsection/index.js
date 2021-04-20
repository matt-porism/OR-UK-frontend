import { Fragment } from 'react';
import InjectHtml from '../home/InjectHtml';

const HtmlSection = ({sections}) => {

    return ( 

        sections.map((item, index) => {

        let header = <></>
        if (item.sectionHeading){
            header = <><h2><InjectHtml itemKey={`${index}head`} paragraphText={item.sectionHeading}/></h2></>
        }
        return <Fragment key="itemkey">
             {header}  
             <InjectHtml itemKey={`${index}body`} paragraphText={item.sectionBody}/>
         </Fragment>
        })
        )
    }
    export default HtmlSection;

