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
      .get("http://localhost:8000/api/newdeveloper")
      .then(response => {
        const data = response.data;
        const newLights = [];

        if (data.lights) {
          const lights = data.lights;
          Object.keys(lights).forEach(function(key) {
            let light = lights[key];
            let state = light.state
            if (light.name && light.type && state) {
              newLights.push({
                id: light.uniqueid,
                name: light.name,
                type: light.type,
                on: state.on ? 'On' : 'Off',
              });
            }
          });

          // create a new State object without mutating original State object
          const newState = Object.assign({}, this.state, {
            lights: newLights
          });

          // store the new state object in the component's state
          this.setState(newState);
        }
      })
      .catch(error => {
        console.log('Network request failed');
        console.log(error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
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
