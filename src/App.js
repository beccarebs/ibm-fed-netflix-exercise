import React, { Component } from 'react';
import EnglishContent from './data/en_US.json';
import PigLatinContent from './data/la_PG.json';
import Navigation from './components/Navigation/Navigation';
import Intro from './components/Intro/Intro';
import Gallery from './components/Gallery/Gallery';
import EpisodeList from './components/EpisodeList/EpisodeList';
import './App.scss';
import Inspiration from './components/Inspiration/Inspiration.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: EnglishContent
    }

    this.getLanguage = this.getLanguage.bind(this);
  }

  getLanguage(language) {
    if (language === 'en_US') {
      this.setState({
        content: EnglishContent
      })
    } else if (language === 'la_PG') {
      this.setState({
        content: PigLatinContent
      })
    } 
  }

  render(){
    return (
      <div className="App">
        <Navigation content={this.state.content} getLanguage={this.getLanguage.bind(this)} />
        <Intro content={this.state.content} />
        <Inspiration content={this.state.content} />
        <Gallery content={this.state.content} />
        <EpisodeList content={this.state.content} />
      </div>
    );
  }
}

export default App;
