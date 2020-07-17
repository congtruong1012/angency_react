import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="about">
        <div className="about__wrapper">
          <div className="about__img">
            <img src="./image/freelancer-bearded-man-taking-notes-laptop_85574-3146.png" alt="" />
            <img src="./image/Path116.png" alt="" className="about__round--green" />
            <img src="./image/Group224.png" alt="" className="about__point" />
          </div>
          <div className="about__info">
            <div className="about__content">
              <h5>ABOUT ME</h5><br />
              <div className="about__title">Why hire us for your <br /> next project?</div>
              <div className="about__desc">
                We are Creative Director and UI/UX Designer from New York, working in web development and
                print media. We enjoy turning complex problems into simple, beautiful and intuitive designs.
                <br /><br />
                Our job is to build your website so that it is functional and user-friendly but at the same
                time attractive.
              </div>
              <a href="#!" className="about__btn">Download CV</a>
            </div>
          </div>
        </div>
        <div className="about__circle">
          <ul className="about__circle-list">
            <li className="about__circle-item">
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} className="about__circle--design" style={{'--percent': 50}} />
              </svg>
              <div className="about__circle-content">
                <span className="about__circle-percent">50%</span><br />
                <span className="about__circle-name">WEB DESIGN</span>
              </div>
            </li>
            <li className="about__circle-item">
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} className="about__circle--developer" style={{'--percent': 75}} />
              </svg>
              <div className="about__circle-content">
                <span className="about__circle-percent">75%</span><br />
                <span className="about__circle-name">DEVELOPMENT</span>
              </div>
            </li>
            <li className="about__circle-item">
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} className="about__circle--web" style={{'--percent': 20}} />
              </svg>
              <div className="about__circle-content">
                <span className="about__circle-percent">20%</span><br />
                <span className="about__circle-name">WEB DESIGN</span>
              </div>
            </li>
            <li className="about__circle-item">
              <div className="about__circle-content">
                <svg>
                  <circle cx={70} cy={70} r={70} />
                  <circle cx={70} cy={70} r={70} className="about__circle--user" style={{'--percent': 50}} />
                </svg>
                <span className="about__circle-percent">50%</span><br />
                <span className="about__circle-name">USER EXPERIENCE</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
        );
    }
}

export default index;