import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SideMenu from './components/sidemenu/SideMenu';
import './App.css';

function App() {
  const BASE_URL = 'http://54.78.155.180:1337';
  
  let page_uri = window.location.pathname;
  if (page_uri == '/'){
	  page_uri = '/landing-page';
  }
  
  const MENU_URI = '/top-menus';
  const SUB_MENU_URI = '/sub-menus/';

  const [headerText, setHeaderText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [subMenuId, setSubMenuId] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);

  useEffect(() => {
    // fetch from strapi
    fetch(BASE_URL + page_uri)
      .then((res) => res.json())
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
      });

    fetch(BASE_URL + MENU_URI)
      .then((res) => res.json())
      .then((data) => setMainMenu(data));
  }, []);

  useEffect(() => {
    if (subMenuId) {
      fetch(BASE_URL + SUB_MENU_URI + subMenuId)
        .then((res) => res.json())
        .then((data) => setSubMenu(data.MenuItem));
    }
  }, [subMenuId]);

  let side;
  let mainPanelCss = 'col-12';

  if (subMenu && subMenu.length > 0) {
    mainPanelCss = 'col-10';
    side = <SideMenu subMenu={subMenu} />;
  }

  return (
    <Router>
      <div className="App">
        <Header mainMenu={mainMenu} topMenuId={topMenuId} />
        <div className="container-fluid">
          <div className="row">
            {side}
            <div className={mainPanelCss}>
              <main>
                <h2>{headerText}</h2>
                <ReactMarkdown>{bodyText}</ReactMarkdown>
                <img className="logo" src={imageUrl} alt="logo" />
              </main>
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
