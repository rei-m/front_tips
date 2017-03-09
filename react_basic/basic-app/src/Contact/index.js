import React, { Component } from 'react';
import Section from '../Section';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <Section sectionName="contact" title="CONTACT">
        <form className="contact-form">
          <input type="text" name="name" placeholder="NAME" />
          <textarea name="message" placeholder="MESSAGE"></textarea>
          <input type="submit" value="SEND" />
        </form>
      </Section>
    );
  }
}

export default Contact;
