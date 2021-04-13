import '../../styles/css/styles.css';
import SideMenu from '../sidemenu';
import Learn from '../home/Learn';
import HtmlSection from '../htmlsection';
   
const About = ({aboutProps, sideMenu, styleName}) => {
    const {article: {sections }} = aboutProps;
    
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