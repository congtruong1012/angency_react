import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="service">
        <div className="grid wide">
          <h5>MY SERVICE</h5><br />
          <div className="service__brief">Our Provide Features &amp; Expertise</div>
          <div className="service__list">
            <div className="service__item">
              <div className="service__item-left">
                <div className="service__item-round">
                  <img src="./image/Path121.png" alt="" />
                </div>
                <div className="service__item-nameL">Web Design</div>
                <ul className="service__item-list">
                  <li className="service__item-solid" />
                  <li className="service__item-solid" />
                  <li className="service__item-solid" />
                </ul>
                <div className="service__item-contentL">
                  Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod
                  tempor dolore.
                </div>
                <a href="#!" className="service__item-btn">Know More <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg></a>
              </div>
              <div className="service__item-right">
                <div className="service__item-contentR">
                  <div className="service__item-percent">95%</div>
                  <div className="service__item-progressBar">
                    <div className="service__item-progressBar--web" style={{'--percent': '95%'}}>
                    </div>
                  </div>
                  <div className="service__item-name">Web Design</div>
                  <div className="service__item-desc">HTML, CSS, JQuery</div>
                </div>
              </div>
            </div>
            <div className="service__item">
              <div className="service__item-left is--active">
                <div className="service__item-round is--active">
                  <img src="./image/Page-1.png" alt="" />
                </div>
                <div className="service__item-nameL is--active">Graphics Design</div>
                <ul className="service__item-list">
                  <li className="service__item-solid is--active" />
                  <li className="service__item-solid is--active" />
                  <li className="service__item-solid is--active" />
                </ul>
                <div className="service__item-contentL is--active">
                  Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod
                  tempor dolore.
                </div>
                <a href="#!" className="service__item-btn is--active">Know More <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg></a>
              </div>
              <div className="service__item-right">
                <div className="service__item-contentR">
                  <div className="service__item-percent">85%</div>
                  <div className="service__item-progressBar  ">
                    <div className="service__item-progressBar--graphics" style={{'--percent': '85%'}} />
                  </div>
                  <div className="service__item-name">Web Design</div>
                  <div className="service__item-desc">Photoshop, Illustrator</div>
                </div>
              </div>
            </div>
            <div className="service__item service__item--image">
              <div className="service__item-left">
                <div className="service__item-round">
                  <img src="./image/1237114.png" alt="" />
                </div>
                <div className="service__item-nameL">Web Developement</div>
                <ul className="service__item-list">
                  <li className="service__item-solid" />
                  <li className="service__item-solid" />
                  <li className="service__item-solid" />
                </ul>
                <div className="service__item-contentL">
                  Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod
                  tempor dolore.
                </div>
                <a href="#!" className="service__item-btn">Know More <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg></a>
              </div>
              <div className="service__item-right">
                <div className="service__item-contentR">
                  <div className="service__item-percent">70%</div>
                  <div className="service__item-progressBar ">
                    <div className="service__item-progressBar--developement" style={{'--percent': '70%'}} />
                  </div>
                  <div className="service__item-nameR">Web Developement</div>
                  <div className="service__item-desc">HTML, CSS, jQuery</div>
                </div>
              </div>
            </div>
          </div>
          <a href="#!" className="service__btn">View More</a>
        </div>
      </div>
        );
    }
}

export default index;