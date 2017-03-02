import React, { Component } from 'react';
import Section from '../Section';
import './style.css';

class Works extends Component {
  render() {
    return (
      <Section sectionName="works" title="WORKS">
        <div class="works-wrapper">
          <div class="work-box">
            <img src="images/1.jpg" alt="いちまいめ" class="work-image" />
            <div class="work-description">
              <div class="work-description-inner">
                <p class="work-text">
                  ひとつめの制作事例が入ります。<br />
                  簡単な説明が入ります。<br />
                  ツール : XXX, XXX, XXX <br />
                  <a href="#" class="button button-ghost">READ MORE</a>
                </p>
              </div>
            </div>
          </div>
          <div class="work-box">
            <img src="images/2.jpg" alt="にまいめ" class="work-image" />
            <div class="work-description">
              <div class="work-description-inner">
                <p class="work-text">
                  ふたつめの制作事例が入ります。<br />
                  簡単な説明が入ります。<br />
                  ツール : XXX, XXX, XXX <br />
                  <a href="#" class="button button-ghost">READ MORE</a>
                </p>
              </div>
            </div>
          </div>
          <div class="work-box">
            <img src="images/3.jpg" alt="さんまいめ" class="work-image" />
            <div class="work-description">
              <div class="work-description-inner">
                <p class="work-text">
                  みっつめの制作事例が入ります。<br />
                  簡単な説明が入ります。<br />
                  ツール : XXX, XXX, XXX <br />
                  <a href="#" class="button button-ghost">READ MORE</a>
                </p>
              </div>
            </div>
          </div>
          <div class="work-box">
            <img src="images/4.jpg" alt="よんまいめ" class="work-image" />
            <div class="work-description">
              <div class="work-description-inner">
                <p class="work-text">
                  よっつめの制作事例が入ります。<br />
                  簡単な説明が入ります。<br />
                  ツール : XXX, XXX, XXX <br />
                  <a href="#" class="button button-ghost">READ MORE</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Works;
