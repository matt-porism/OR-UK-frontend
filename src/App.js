import { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import Navigator from './components/navigator/Navigator';
import '../src/styles/css/styles.css';
import { fetchLandingPageContent, 
         fetchMainMenuItems } from './helpers/ContentConsumer';
import HomePage from "./components/home";
//import About from "./components/about";
//import HowPage from "./components/how";
//import CommunityPage from "./components/community";

function App() {
  const [homeProps, setHomeProps] = useState({});
  //const [headerText, setHeaderText] = useState('');
  //const [bodyText, setBodyText] = useState('');
  //const [imageUrl, setImageUrl] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  //const [anchorLink, setAnchorLink] = useState('');
  //const [anchorLabel, setAnchorLabel] = useState('');
  const [errors, setErrors] = useState({});  //use to confirm render component or error page

  useEffect(() => {
    // fetch from strapi
    let pageUri = window.location.pathname;
    console.log('URL '+pageUri);
    if (!pageUri || pageUri === '/'){
      pageUri = '/home-page';
    }

    fetchLandingPageContent(pageUri)
      .then((data) => {
        // set data from strapi to state vars
        setHomeProps((data));
        
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
       
      }).catch(err => console.log("do something with error as required"));

    fetchMainMenuItems()
      .then((data) => { 
        console.log("main menu items ", data);
        setMainMenu(data)
      });
  }, []);

 console.log("Home page props ", errors);

  return (   
 <div className="container">
      
      <BrowserRouter forceRefresh={true}>
    <Header />
        <Navigator mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
        
            <Route exact path="/" render={() => 
                (
                  <HomePage homePageProps={homeProps} classname="main" />
                )}/>
      {/*<Route path="/home" render={() => (
        <HomePage headingText={headerText} bodyText={bodyText} classname="main" quote={quote} anchorLabel={anchorLabel} anchorLink={anchorLink}
        hIIHeading="Some heading" listItems={["one","two","threee"]}/>

      )}/>
      <Route path="/about" render={() =>  <About sideMenu={subMenu} styleName="main"/> }/>
      <Route path="/how-to" render={() =>  <HowPage headingText={headerText} bodyText={bodyText} styleName="main"/> }/>
      <Route path="/get-started" render={() =>  <CommunityPage headingText={headerText} bodyText={bodyText} styleName="main"/> }/>*/}
			<Route>
				<Content homePageProps={homeProps}/>
			</Route>      
      <Footer className="footer" />
      </BrowserRouter> 
    
    </div>
  );
}

export default App;
