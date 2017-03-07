import React, { Component } from 'react';
import Section from '../Section';
import Box from './Box';
import './style.css';

class Works extends Component {
  render() {
    return (
      <Section sectionName="works" title="WORKS">
        <div className="works-wrapper">
          <Box src="/images/1.jpg" alt="いちまいめ">
            ひとつめの制作事例が入ります。<br />
            簡単な説明が入ります。<br />
            ツール : XXX, XXX, XXX <br />
          </Box>
          <Box src="/images/2.jpg" alt="にまいめ">
            ふたつめの制作事例が入ります。<br />
            簡単な説明が入ります。<br />
            ツール : XXX, XXX, XXX <br />
          </Box>
          <Box src="/images/3.jpg" alt="さんまいめ">
            みっつめの制作事例が入ります。<br />
            簡単な説明が入ります。<br />
            ツール : XXX, XXX, XXX <br />
          </Box>
          <Box src="/images/4.jpg" alt="よんまいめ">
            よっつめの制作事例が入ります。<br />
            簡単な説明が入ります。<br />
            ツール : XXX, XXX, XXX <br />
          </Box>
        </div>
      </Section>
    );
  }
}

export default Works;
