import { useState, useEffect } from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'
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
      // set data from strapi to state vars
      setHeaderText(data.title);
      setBodyText(data.projectOverview)
      setImageUrl(data.logo.name)
    })
  }, []);


  return (
    <div className="App">
      <Header />
      <div class="container">
        <main>
          <h2>{headerText} </h2>
          <p>{bodyText}</p>
          <img className="logo" src={imageUrl} alt="logo"/>
        </main>
        <hr></hr>
        <h2>Upcoming events</h2>
        <section className="cards">
          <Card title={headerText} body={bodyText} date="22/11/2021" image={imageUrl}/>
          <Card title={headerText} body={bodyText} date="22/11/2021" image={imageUrl}/>
          <Card title={headerText} body={bodyText} date="22/11/2021" image={imageUrl}/>
          <Card title={headerText} body={bodyText} date="22/11/2021" image={imageUrl}/>
        </section>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
