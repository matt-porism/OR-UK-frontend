import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import FallBackRender from './components/fallback';
import ScrollToTop from './components/navigator/ScrollToTop';



ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={(error, resetErrorBoundary) => <FallBackRender error={error} resetErrorBoundary={resetErrorBoundary}/>}>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
