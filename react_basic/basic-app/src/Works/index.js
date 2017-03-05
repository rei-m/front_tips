import React, { Component } from 'react';
import Section from '../Section';
import Box from './Box';
import './style.css';

class Works extends Component {
  render() {
    return (
      <Section sectionName="works" title="WORKS">
        <div className="works-wrapper">
          <Box imageFileName="/images/1.jpg" imageAlt="いちまいめ">
            ひとつめの制作事例が入ります。<br />
            簡単な説明が入ります。<br />
            ツール : XXX, XXX, XXX <br />
          </Box>
          <Box imageFileName="/images/2.jpg" imageAlt="にまいめ">
            ふたつめの制作事例が入ります。<br />
            簡単な説明が入ります。<br />
            ツール : XXX, XXX, XXX <br />
          </Box>
          <Box imageFileName="/images/3.jpg" imageAlt="さんまいめ">
            みっつめの制作事例が入ります。<br />
            簡単な説明が入ります。<br />
            ツール : XXX, XXX, XXX <br />
          </Box>
          <Box imageFileName="/images/4.jpg" imageAlt="よんまいめ">
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
