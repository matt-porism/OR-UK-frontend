import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Navigator from  './components/navigator/Navigator';
import Footer from './components/footer/Footer';
import '../src/styles/css/styles.css';
import { fetchLandingPageContent, 
         fetchMainMenuItems } from './helpers/ContentConsumer';
import HomePage from "./components/home";

function App() {
  const [headerText, setHeaderText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  const [anchorLink, setAnchorLink] = useState('');
  const [anchorLabel, setAnchorLabel] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // fetch from strapi
    fetchLandingPageContent()
      .then((data) => {
        // set data from strapi to state vars
        setHeaderText(data.title);
        setBodyText(data.projectOverview);
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
        if (data.logo) {
          setImageUrl(data.logo.name);
        }
        setQuote("do not quote me")
        setAnchorLabel("my link");
      }).catch(err => console.log("do something with error as required"));

    fetchMainMenuItems()
      .then((data) => setMainMenu(data));
  }, []);

  return (
    <Router>
      <div className="container">
      <Header />
        <Navigator mainMenu={mainMenu} topMenuId={topMenuId} />
          <HomePage headingText={headerText} bodyText={bodyText} classname="main" quote={quote} anchorLabel={anchorLabel} anchorLink={anchorLink}
          hIIHeading="Some heading" listItems={["one","two","threee"]}/>
         
        <Footer className="footer" />
        </div>
    </Router>
  );
}

export default App;
