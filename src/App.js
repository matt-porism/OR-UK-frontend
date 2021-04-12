import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import './App.css';
import '../src/styles/css/styles.css';
import { fetchLandingPageContent, 
         fetchMainMenuItems } from './helpers/ContentConsumer';

function App() {
  const [apiData, setAPIData] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);

  useEffect(() => {
	let pageUri = window.location.pathname;
	if (pageUri === '/'){
		pageUri = '/landing-page';
	}
    // fetch from strapi

    fetchLandingPageContent(pageUri)
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
      }).catch(err => console.log("do something with error as required"));

    fetchMainMenuItems()
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
