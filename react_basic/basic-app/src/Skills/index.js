import React, { Component } from 'react';
import Section from '../Section';
import Box from './Box';
import './style.css';

class Skills extends Component {
  render() {
    return (
      <Section sectionName="skills" title="MY SKILLS">
        <div className="skills-wrapper">
          <Box title="IDEA" icon="lightbulb-o">
            すきるについて。すきるについて。すきるについて。すきるについて。すきるについて。
          </Box>
          <Box title="DESIGN" icon="paint-brush">
            でざいんについて。でざいんについて。でざいんについて。でざいんについて。でざいんについて。
          </Box>
          <Box title="CODING" icon="code">
            コーディングについて。コーディングについて。コーディングについて。コーディングについて。コーディングについて。
          </Box>
        </div>
      </Section>
    );
  }
}

export default Skills;
