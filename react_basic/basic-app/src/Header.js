import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <p className="Header-title-sub">Web designer's portfolio</p>
        <h1 className="Header-title">HI, MY NAME IS...</h1>
        <p className="Header-description">Check out some of my works.</p>
        <div className="Header-buttons">
          <a href="#about" className="Header-button">LEARN MORE</a>
          <a href="#content" className="Header-button Header-button-showy">SEND MESSAGE</a>
        </div>
      </header>
    );
  }
}

export default Header;
