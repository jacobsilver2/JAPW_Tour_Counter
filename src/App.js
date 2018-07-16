import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center">
          <Countdown date="2018-08-19T00:00:00"/>
        </div>
      </div>
    );
  }
}

export default App;
