import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__top">
          <div className="grid wide">
            <div className="footer__wrapper">
              <div className="footer__left">
                <div className="footer__left-logo">
                  <img src="./image/group350.png" alt="" />
                </div>
                <div className="footer__left-desc">
                  Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea
                  takimata sanctus est is the is the magna aliquyam.
                </div>
              </div>
              <div className="footer__right">
                <div className="footer__right-desc">
                  We are digital designer living in United States. Apart from
                  eating burger
                </div>
                <ul className="footer__right-list">
                  <li className="footer__right-item">
                    <div className="footer__right-title">SEND MAIL</div>
                    <div className="footer__right-name">info@portfolio.com</div>
                  </li>
                  <li className="footer__right-item">
                    <div className="footer__right-title">MAKE CALL</div>
                    <div className="footer__right-name">
                      <div>+1234567890</div>
                      <div>+1234567890</div>
                    </div>
                  </li>
                  <li className="footer__right-item">
                    <div className="footer__right-title">GET IN TOUCH</div>
                    <div className="footer__right-name">
                      123/A, Hamburger City New York, USA
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">2019 All Rights Reserved</div>
      </div>
    );
  }
}

export default index;
