import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div className="header">
        <div className="grid wide">
          <nav className="header__navbar">
            <a href="#!" className="header__logo">
              <img src="./image/Group50.png" alt="" />
            </a>
            <div className="heaader__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <a href="#!" className="header__menu-link">
                    Home
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#!" className="header__menu-link">
                    About us
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#!" className="header__menu-link">
                    Services
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#!" className="header__menu-link">
                    News
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#!" className="header__menu-link">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="header__navbar-mobile">
            <div className="nav__overlay"></div>
            <div className="header__navbar-inner">
              <a href="#!">
                <img src="./image/Group50.png" alt="" />
              </a>
              <button>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  className="svg-inline--fa fa-bars fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="header__navbar-collapse">
              <button className="header__navbar-close">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times"
                  className="svg-inline--fa fa-times fa-w-11"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                >
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              </button>
              <ul className="header__navbar-list">
                <li className="header__navbar-item">
                  <a href="#!" className="header__navbar-link">
                    Home
                  </a>
                </li>
                <li className="header__navbar-item">
                  <a href="#!" className="header__navbar-link">
                    About us
                  </a>
                </li>
                <li className="header__navbar-item">
                  <a href="#!" className="header__navbar-link">
                    Services
                  </a>
                </li>
                <li className="header__navbar-item">
                  <a href="#!" className="header__navbar-link">
                    News
                  </a>
                </li>
                <li className="header__navbar-item">
                  <a href="#!" className="header__navbar-link">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header__start">
            <div className="row">
              <div className="l-7 m-12 c-12">
                <div className="header__start-left">
                  <div className="header__start-title">
                    <div>Sharing Vitality</div>
                    <div style={{ fontWeight: "800" }}>Through Designing</div>
                  </div>
                  <span className="header__start-content">
                    clean design and advanced digital solutions
                  </span>
                  <div className="header__start-btns show--mobile">
                    <a href="#!">Explore More</a>
                    <a href="#!">See Live Demo</a>
                  </div>
                </div>
              </div>
              <div className="l-5 m-12 c-12">
                <div className="header__start-right hide--mobile">
                  <img src="./image/2905211.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="./image/Path1.png" alt="" className="header__background" />
        <div className="round round--one "></div>
        <div className="round round--two"></div>
        <div className="round round--three"></div>
        <div className="round round--four"></div>
        <div className="round round--five"></div>
        <div className="round-full round-full--six"></div>
        <div className="round-full round-full--seven"></div>
        <div className="background-curve background-curve--one">
          <img src="./image/Path6.png" alt="" />
        </div>
        <div className="background-curve background-curve--two">
          <img src="./image/Path27.png" alt="" />
        </div>
      </div>
    );
  }
}

export default index;
