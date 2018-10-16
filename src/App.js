import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import LightList from "./components/LightList";

class App extends Component {

  // default State object
  state = {
    lights: []
  };

  componentDidMount() {
    axios
      .get("http://localhost/api/newdeveloper")
      .then(response => {
        /*
        // create an array of contacts only with relevant data
        const newLights = response.data.lights.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        // create a new "State" object without mutating original State object
        const newState = Object.assign({}, this.state, {
          lights: newLights
        });
        */
        const newLights = JSON.stringify(response.data);
        console.log(newLights);
        const newState = Object.assign({}. this.state, {
          lights: newLights
        });
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Hue API consumer</h1>
        </header>

        <LightList lights={this.state.lights} />
      </div>
    );
  }
}

export default App;
