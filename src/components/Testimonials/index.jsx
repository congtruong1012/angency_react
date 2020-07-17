import React, { Component } from "react";

class index extends Component {
  render() {
    
    var currentSlide = (num) => {
      console.log(num);
    };
    
    return (
      <div className="testimonials">
        <h5>TESTIMONIALS</h5>
        <br />
        <div className="testimonials__brief">What People Says</div>
        <div className="testimonials__apostrophe">
          <img
            src="./image/107098331_806534779882592_5605536070200162917_n.png"
            alt=""
          />
        </div>
        <div className="testimonials__desc">
          Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata
          sanctus est is the lorem ipsum dolor sit amet. sed diam nonumy eirmod
          tempor invidunt ut labore et dolore is the magna aliquyam.
        </div>
        <div className="testimonials__slider">
          <div className="testimonials__list-member">
            <div className="testimonials__item-member">
              <h2 className="testimonials__name"> John Doe</h2>
              <div className="testimonials__position">CEO, ABC Company</div>
            </div>
            <div className="testimonials__item-member">
              <h2 className="testimonials__name">Peter Pane </h2>
              <div className="testimonials__position">Leader, ABC Company</div>
            </div>
            <div className="testimonials__item-member">
              <h2 className="testimonials__name"> Master </h2>
              <div className="testimonials__position">Manager, ACB Company</div>
            </div>
          </div>
          <div className="testimonials__btns">
            <span
              className="testimonials__btn is--active"
              onClick={() => currentSlide(1)}
            />
            <span
              className="testimonials__btn"
              onClick={() => currentSlide(2)}
            />
            <span
              className="testimonials__btn"
              onClick={() => currentSlide(3)}
            />
          </div>
          <div className="testimonials__list-image">
            <div className="testimonials__item-image">
              <div className="testimonials__img">
                <img src="./image/1.png" alt="" />
              </div>
            </div>
            <div className="testimonials__item-image">
              <div className="testimonials__img">
                <img src="./image/3.png" alt="" />
              </div>
            </div>
            <div className="testimonials__item-image">
              <div className="testimonials__img">
                <img src="./image/2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonials__popup">
            <div className="testimonials__popup-overlay" />
            <div className="testimonials__popup-content">
              <div className="testimonials__popup-close">
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
                  />
                </svg>
              </div>
              <div className="testimonials__popup-list">
                <div className="testimonials__popup-item">
                  <h2 className="testimonials__popup-name">John Doe</h2>
                  <p className="testimonials__popup-position">
                    CEO, ABC Company
                  </p>
                  <div className="testimonials__popup-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora excepturi laboriosam voluptas dolor veritatis
                    voluptate in, ex similique veniam sequi aut optio harum
                    voluptates iure nemo dolore laudantium obcaecati doloremque.
                  </div>
                </div>
                <div className="testimonials__popup-item">
                  <h2 className="testimonials__popup-name">Peter Pane</h2>
                  <p className="testimonials__popup-position">
                    Leader, ABC Company
                  </p>
                  <div className="testimonials__popup-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora excepturi laboriosam voluptas dolor veritatis
                    voluptate in, ex similique veniam sequi aut optio harum
                    voluptates iure nemo dolore laudantium obcaecati doloremque.
                  </div>
                </div>
                <div className="testimonials__popup-item">
                  <h2 className="testimonials__popup-name">Master</h2>
                  <p className="testimonials__popup-position">
                    Manager, ABC Company
                  </p>
                  <div className="testimonials__popup-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora excepturi laboriosam voluptas dolor veritatis
                    voluptate in, ex similique veniam sequi aut optio harum
                    voluptates iure nemo dolore laudantium obcaecati doloremque.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="round  round--eight" />
        <div className="round  round--nine" />
        <div className="round-full round-full--ten" />
        <div className="round-full round-full--eleven" />
        <div className="round round--twelve" />
        <div className="background-curve background-curve--three">
          <img src="./image/Path6.png" alt="" />
        </div>
      </div>
    );
  }
}

export default index;
