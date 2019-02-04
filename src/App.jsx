import React, { Component } from 'react';
import './App.css';
import CardDeck from './Components/CardDeck';


class App extends Component {
  state={}

  render() {
    return (
      <div className="app">
        <CardDeck />
      </div>


    );
  }
}

export default App;
