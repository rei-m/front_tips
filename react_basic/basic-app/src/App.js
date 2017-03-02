import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Works from './Works';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Test</Header>
        <About />
        <Works />
      </div>
    );
  }
}

export default App;
