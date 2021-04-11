import ReactMarkdown from 'react-markdown';

const Section = ({headingText, bodyText}) => {

    return (
        <>
        <section className="section">
        <h1>{headingText}</h1>
        <ReactMarkdown>{bodyText}</ReactMarkdown>
        </section>
      
        </>
   
        )
    }
    export default Section;