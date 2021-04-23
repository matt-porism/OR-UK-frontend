import { useState, useEffect } from 'react';
import SideMenu from '../sidemenu';
//import Learn from '../home/Learn';
import HtmlSection from '../htmlsection';
//import LeftRight from '../container/';
import LinksList from '../links/LinksList';
   
const About = ({aboutProps, styleName}) => {
    const {article: { title, sections }} = aboutProps;
    
    const [sectionHeadings, setSectionHeadings] = useState([]);
    useEffect(() => {
        setSectionHeadings(sections.map(section => section.sectionHeading));
    }, [sections]);

    
   return (
       
       <>
        <main className={styleName}>
            <div className="flexcontainer">
            <SideMenu subMenu={sectionHeadings} />
          
            <article className="flexright">     
                <h1>{title}</h1>
                <HtmlSection sections={sections} /> 
                
                <hr/>
                {/*pass to Leftright */}
                <LinksList list={[{id:1, url:"/apage", TextToDisplay:"How Open Referral UK works"}]} />
            </article>
            </div>     
        </main>
       </>
)
}
export default About;