import '../../styles/css/styles.css';
import SideMenu from '../sidemenu';
//import Learn from '../home/Learn';
import HtmlSection from '../htmlsection';
//import LeftRight from '../container/';
import LinksList from '../links/LinksList';
   
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
        {/*pass to Leftright */}
                <LinksList list={[{id:1, url:"/apage", TextToDisplay:"How Open Referral UK works"}]} />
            </div>
            </div>     
        </main>
       </>
)
}
export default About;