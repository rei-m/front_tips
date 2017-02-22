import React, { Component } from 'react';
import './style.css';

class About extends Component {
  render() {
    return (
      <section className="about">
        <h2 className="heading">ABOUT ME</h2>
        <p className="about-text">
          このページはReactでSPAを作るときのシンプルなサンプルです。
        </p>
      </section>
    );
  }
}

export default About;
