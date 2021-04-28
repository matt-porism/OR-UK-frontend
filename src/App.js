import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/errorpage/'
import GenericErrorPage from './components/shared/errorpage/errorpagegeneric';
import '../src/styles/sass/styles.scss';
import { fetchLandingPageContent, 
         fetchMainMenuItems,
         fetchSubMenuItems } from './helpers/ContentConsumer';
import useOukapi from './helpers/dataFetch';
import HomePage from "./components/home";
import About from "./components/about";
import HowPage from "./components/how";
import CommunityPage from "./components/community";
import Contact from "./components/contact";
import WhoIsUsing from "./components/whoisusing";
import GenericContentPage from './components/genericcontentpage/GenericContentPage';
import CaseStudiesLandingPage from './components/casestudies/LandingPage';
import CaseStudy from "./components/casestudies/CaseStudy";

//refactor
//pull data as needed perhaps on first call of page?
function App() {
  const [homeProps, setHomeProps] = useState({});

  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  const [subMenuId, setSubMenuId] = useState('');

  const [subMenu, setSubMenu] = useState([]);
  const [errors, setErrors] = useState({});  //use to confirm render component or error page
  let [{data, isFetching, isError}] = useOukapi("https://admin.beta.openreferraluk.org/about-page")

  const COMMUNITY_PAGE = process.env.REACT_APP_COMMUNITY_PAGE;
  const BASE_URL  = process.env.REACT_APP_BASE_URL;
  const CONTACT_PAGE = process.env.REACT_APP_CONTACT_PAGE;
  const REACT_APP_FOOTER = process.env.REACT_APP_FOOTER
   console.log(errors);  //take care of on refactor
  
const aboutProps = data;

[{data, isFetching, isError}] = useOukapi(`${BASE_URL}${COMMUNITY_PAGE}`)

const communityProps = data;
[{ data, isError }] = useOukapi(`${BASE_URL}${CONTACT_PAGE}`)
const contactProps = data;
[{data, isFetching, isError}] = useOukapi(`${BASE_URL}${REACT_APP_FOOTER}`)
const footerProps = data;

  useEffect(() => {
    // fetch from strapi
    fetchLandingPageContent()
      .then((data) => {
        // set data from strapi to state vars
        console.log("homeprops", data)
        setHomeProps((data));
       // setBodyText(data.projectOverview);
        if (data.sub_menu) {
          setSubMenuId(data.sub_menu.id);
        }
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
       
      }).catch(err => console.log("do something with error as required"));

    fetchMainMenuItems()
      .then((data) => { 
        setMainMenu(data)
      });
  }, []);

  useEffect(() => {
    
    if (subMenuId) {
      
      fetchSubMenuItems(subMenuId)
        .then((data) => { setSubMenu(data.MenuItem)}).catch(err => {
          handleErrors("menu",err.message);
        });
    }
  }, [subMenuId]);

  const handleErrors = (target, message) => {
    const errors = {};

    errors[target] = message;
    setErrors(errors);
    
  }

  //now can use iserror instead of object keys
  return (
     !isFetching && !isError  && Object.keys(homeProps).length > 0 &&
    
    ( <div className="container">
      
    <Header mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
        
        <Switch>
            <Route exact path="/" render={() => ( <HomePage homePageProps={homeProps} classname="main" /> )}/>
            <Route path="/about-open-referral" render={() =>  <About aboutProps={aboutProps} sideMenu={subMenu} styleName="main" /> }/>
            <Route path="/how-it-works/:slugField" render={({ match }) => <GenericContentPage cmsLocation={`/pages?slugfield=${match.params.slugField}`} />}/>
            <Route path="/how-it-works" render={() =>  <HowPage styleName="main"/> }/>
            <Route path="/community/case-studies/:slugField" render={routeProps => <CaseStudy {...routeProps} /> } />
            <Route path="/community/case-studies" render={ () => <CaseStudiesLandingPage styleName="main"/> } />
            <Route path="/community" render={() =>  <CommunityPage communityProps={communityProps} styleName="main"/> }/>
            <Route path="/contact-us" render={() =>  <Contact contactProps={contactProps} styleName="main"/> }/>
            <Route path="/who-is-using" render={() =>  <WhoIsUsing styleName="main"/> }/>
            <Route path="/show-error"  component={GenericErrorPage} />
            <Route path="/404"  component={NotFound} />
            <Redirect to="/404" />

      </Switch> 
      <Footer footerProps={footerProps} styleName="footer" />
    
    
    </div>)
    
  );
}

export default App;
