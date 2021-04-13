import '../../styles/css/styles.css';
import SideMenu from '../sidemenu';
import Section from '../section';
import Learn from '../home/Learn';
import InjectHtml from '../home/InjectHtml';
import HtmlSection from '../htmlsection';
   
const About = ({aboutProps, sideMenu, styleName}) => {
    const {article: {title, sections }} = aboutProps;
    {console.log(sections)}
   return (
       
       <>
        <main className={styleName}>
            <div className="flexcontainer">
            {sideMenu.length > 0 &&  (<SideMenu subMenu={sideMenu} />) }
          
            <div className="flexright">     
            <HtmlSection sections={sections} /> 
                
                <hr/>
                <Learn linkText={["How Open Referral UK works"]} left={true}/>
            </div>
            </div>     
        </main>
       </>
)
}
export default About;