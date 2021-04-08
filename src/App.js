import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import './App.css';
import { config } from './config.js';


function App() {

  const [apiData, setAPIData] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);

  useEffect(() => {
	var pageUri = window.location.pathname;
	if (pageUri === '/'){
		pageUri = '/landing-page';
	}
    // fetch from strapi
    fetch(config.STRAPI_BASE_URI + pageUri)
      .then((res) => res.json())
      .then((data) => {
		setAPIData(JSON.stringify(data));
        // set data from strapi to state vars
        setHeaderText(data.title);
        setBodyText(data.projectOverview);
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
        if (data.logo) {
          setImageUrl(data.logo.name);
        }
      });

    fetch(config.STRAPI_BASE_URI + config.MENU_URI_STUB)
      .then((res) => res.json())
      .then((data) => setMainMenu(data));
  }, []);

  return (
  <Router>
      <div className="App">
        <Header mainMenu={mainMenu} topMenuId={topMenuId} />
        <div className="container-fluid">
		<Switch>
			<Route exact path="/">
				<main>
					<h1>{headerText}</h1>
					<ReactMarkdown>{bodyText}</ReactMarkdown>
					<img className="logo" src={imageUrl} alt="logo" />
				</main>
			</Route>
			<Route>
				<Content data={apiData}/>
			</Route>
		</Switch>
        </div>
        <Footer className="footer" />
      </div>
	</Router>
  );
}

export default App;
