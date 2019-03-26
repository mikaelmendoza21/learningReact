import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClockPanel from './Components/ClockPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Learning React!
          </h1>
          <ClockPanel title="Los Angeles, CA"/>
          <ClockPanel title="Miami, FL" />
        </header>
      </div>
    );
  }
}

export default App;
