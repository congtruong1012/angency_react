import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div className="l-4 m-12 c-12 col">
        <div className="blog__item">
          <div className="blog__item-img">
            <img src={this.props.data.img} alt="" />
          </div>
          <div className="blog__content">
            <div className="blog__content-order">{this.props.data.order}</div>
            <div className="blog__content-brief">{this.props.data.brief}</div>
            <div className="blog__content-listdash">
              <div className="blog__content-itemdash" />
              <div className="blog__content-itemdash" />
            </div>
            <div className="blog__content-desc">{this.props.data.desc}</div>
            <a href="#!" className="blog__content-btn">
              Know <i className="far fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
