import HtmlSection from '../htmlsection';

function ContentPage(props, {styleName}) {

    const { title, introParagraph } = props;
    const myStruct = [{sectionHeading: title, sectionBody: introParagraph}];
    
   //extracted from how
    
    return (
      
        <HtmlSection sections={myStruct} /> 
           
    );
}
    export default ContentPage;