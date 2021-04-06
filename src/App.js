import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Navigator from  './components/navigator/Navigator';
import Footer from './components/footer/Footer';
import SideMenu from './components/sidemenu/SideMenu';
import '../src/styles/css/styles.css';
import { fetchLandingPageContent, 
         fetchMainMenuItems, 
         fetchSubMenuItems } from './helpers/ContentConsumer';

function App() {
  const [headerText, setHeaderText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [subMenuId, setSubMenuId] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);

  useEffect(() => {
    // fetch from strapi
    fetchLandingPageContent()
      .then((data) => {
        // set data from strapi to state vars
        setHeaderText(data.title);
        setBodyText(data.projectOverview);
        if (data.sub_menu) {
          setSubMenuId(data.sub_menu.id);
        }
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
        if (data.logo) {
          setImageUrl(data.logo.name);
        }
      }).catch(err => console.log("do something with error as required"));

    fetchMainMenuItems()
      .then((data) => setMainMenu(data));
  }, []);

  useEffect(() => {
    if (subMenuId) {
      fetchSubMenuItems(subMenuId)
        .then((data) => setSubMenu(data.MenuItem));
    }
  }, [subMenuId]);

  let sideMenu;

  if (subMenu && subMenu.length > 0) {
    sideMenu = <SideMenu subMenu={subMenu} />;
  }

  return (
    <Router>
      <div className="container">
      <Header />
        <Navigator mainMenu={mainMenu} topMenuId={topMenuId} />
          <div className="sidebar">
            {sideMenu}
              <main>
                <h2>{headerText}</h2>
                <ReactMarkdown>{bodyText}</ReactMarkdown>
                <img className="logo" src={imageUrl} alt="logo" />
              </main>
          </div>
        <Footer className="footer" />
        </div>
    </Router>
  );
}

export default App;
