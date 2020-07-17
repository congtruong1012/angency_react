import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

import { connect } from "react-redux";
import { getListPortfolio } from "../../Actions";

class index extends Component {
   componentDidMount(){
    this.props.onGetListPortfolio()
  }
  render() {
    const { listPortfolio } = this.props;
    const getPortfolio = listPortfolio.map((item, index) => {
      return <PortfolioItem data={item} key={item.id} />;
    });
    return (
      <div className="portfolio">
        <div className="grid wide">
          <h5>portfolio</h5>
          <br />
          <div className="portfolio__brief">My Work Examples</div>
          <div className="row portfolio__list">{getPortfolio}</div>
          <a href="#!" className="portfolio__btn">
            View All
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listPortfolio : state.portfolio  
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
    onGetListPortfolio : () =>{
      dispatch(getListPortfolio())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
