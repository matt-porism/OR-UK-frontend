import ReactMarkdown from 'react-markdown';


const Section = ({ headingText, bodyText }) => {

    return (
        <>
            <section className="hero-container">
                <div>
                    <h1>{headingText}</h1>
                    <ReactMarkdown>{bodyText}</ReactMarkdown>
                </div>
            </section>
        </>

    )
}
export default Section;