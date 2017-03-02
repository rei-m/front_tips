import React, { Component } from 'react';
import Section from '../Section';
import './style.css';

class About extends Component {
  render() {
    return (
      <Section sectionName="about" title="ABOUT ME">
        <p className="about-text">
          このページはReactでSPAを作るときのシンプルなサンプルです。
        </p>
      </Section>
    );
  }
}

export default About;
