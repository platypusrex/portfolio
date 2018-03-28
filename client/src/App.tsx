import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

interface City {
  name: string;
  population: number;
}

interface State {
  cities: City[];
}

class App extends React.Component<{}, State> {
  state: State = {
    cities: []
  };

  async componentWillMount () {
    const response = await fetch('/cities');
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
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{margin: '0 auto', maxWidth: '300px'}}>
          {this.state.cities.map(city => (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
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
