import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LightList from "./components/LightList";

const lights = [
  { id: 1, name: "Dimmable light" },
  { id: 2, name: "Color light" },
  { id: 3, name: "Temperature light" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Hue API consumer</h1>
        </header>

        <LightList lights={lights} />
      </div>
    );
  }
}

export default App;
