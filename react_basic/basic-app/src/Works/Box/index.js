import React, { Component } from 'react';
import './style.css';

class Box extends Component {

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="work-box">
        <img src={this.props.src} alt={this.props.alt} className="work-image" />
        <div className="work-description">
          <div className="work-description-inner">
            <p className="work-text">
              {this.props.children}
              <a href="#" className="button button-ghost">READ MORE</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Box;
