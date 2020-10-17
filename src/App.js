import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
