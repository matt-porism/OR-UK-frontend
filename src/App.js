import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'
import './App.css';

function App() {

  const BASE_URL = 'http://54.78.155.180:1337'
  const LANDING_PAGE_URI = '/landing-page'
  const EVENTS_URI = '/events'

  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // fetch from strapi
    fetch(BASE_URL + LANDING_PAGE_URI).then(res => res.json())
    .then( data => {
      // set data from strapi to state vars
      setHeaderText(data.title);
      setBodyText(data.projectOverview)
      setImageUrl(data.logo.name)
    })

    fetch(BASE_URL + EVENTS_URI).then(res => res.json())
      .then(data => setEvents(data))
  }, []);

  const eventNodes = events.map(event => {
    return (
      <Card key={event.id} title={event.title} body={event.body} image={BASE_URL + event.image.url}/>
    )
  })

  return (
    <div className="App">
      <Header />
      <div className="container">
        <main>
          <h2>{headerText} </h2>
          <ReactMarkdown>{bodyText}</ReactMarkdown>
          <img className="logo" src={imageUrl} alt="logo"/>
        </main>
        <hr></hr>
        <h2>Upcoming events</h2>
        <section className="cards">
          {eventNodes}
        </section>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
