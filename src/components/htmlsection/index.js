import InjectHtml from '../home/InjectHtml';



const HtmlSection = ({sections}) => {

    return ( <div>

    {   
        sections.map((item, index) => {
        let header = <></>
        if (item.sectionHeading){
            header = <><h2><InjectHtml itemKey={`${index}head`} paragraphText={item.sectionHeading}/></h2></>
        }
        return <> {header}            
             <InjectHtml itemKey={`${index}body`} paragraphText={item.sectionBody}/>
         </>
        })}
   </div>
   
        )
    }
    export default HtmlSection;

