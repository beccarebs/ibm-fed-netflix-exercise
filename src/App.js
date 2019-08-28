import React from 'react';
import Navigation from './components/Navigation/Navigation';
import EnglishContent from './data/en_US.json';
import PigLatinContent from './data/la_PG.json';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
