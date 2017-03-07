import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Works from './Works';
import Skills from './Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Works />
        <Skills />
      </div>
    );
  }
}

export default App;
