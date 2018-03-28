import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cities: []
  };

  async componentWillMount () {
    const response = await fetch('api/cities');
    const cities = await response.json();
    this.setState({cities});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div style={{margin: '0 auto', maxWidth: '300px'}}>
          {this.state.cities.map(city => (
            <div key={city.name} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <span>{city.name}</span>
              <span>{city.population}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
