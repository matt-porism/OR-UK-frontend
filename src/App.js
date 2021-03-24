import { useState, useEffect } from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';

function App() {

  const URL = 'http://54.78.155.180:1337/landing-page'

  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // fetch from strapi
    fetch(URL).then(res => res.json())
    .then( data => {
      console.log('DATA', data)
      // set data from strapi to state vars
      setHeaderText(data.title);
      setBodyText(data.projectOverview)
      setImageUrl(data.logo.name)
    })
  }, []);


  return (
    <div className="App">
      <Header />
      <main class="content">
        <h2>{headerText} </h2>
        <p>{bodyText}</p>
        <img className="logo" src={imageUrl} alt="logo"/>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default App;
