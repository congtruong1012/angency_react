import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div className="col l-3 m-6 c-12">
        <div className="portfolio__item">
          <img src={this.props.data.image} alt="" />
          <div className="portfolio__item--hover">
            <div className="portfolio__item-content">
              <div className="portfolio__item-title">{this.props.data.name}</div>
              <div className="portfolio__item-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="plus"
                  className="svg-inline--fa fa-plus fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
