import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main class="content">…</main>
      <Footer className="footer" />
    </div>
  );
}

export default App;
