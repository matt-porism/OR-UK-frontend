import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';



const Section = ({headingText, bodyText, styleName}) => {

    return (
        <>
        <section className={styleName}>
        <h1>{headingText}</h1>
        <ReactMarkdown>{bodyText}</ReactMarkdown>
        </section>
      
        </>
   
        )
    }
    export default Section;