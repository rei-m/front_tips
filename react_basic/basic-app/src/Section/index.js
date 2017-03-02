import React, { Component } from 'react';
import './style.css';

class Section extends Component {
  render() {
    return (
      <section className={this.props.sectionName}>
          <h2 className="heading">{this.props.title}</h2>
          {this.props.children}
      </section>
    );
  }
}

export default Section;
