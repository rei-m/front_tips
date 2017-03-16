import React, { Component } from 'react';
import './style.css';

class Box extends Component {

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="skill-box">
        <i className={`fa fa-${this.props.icon} skill-icon`}></i>
        <div className="skill-title">{this.props.title}</div>
        <p className="skill-text">
          {this.props.children}
        </p>
      </div>
    )
  }
}

export default Box;
