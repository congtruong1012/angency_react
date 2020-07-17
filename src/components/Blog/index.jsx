import React, { Component } from "react";
import BlogItem from "./BlogItem";
import { connect } from "react-redux";
import { getListBlog } from "../../Actions";


class index extends Component {
  componentDidMount(){
    this.props.onGetListBlog();
  }
  render() {
    const { blog } = this.props;
    const getListBlog = blog.map((item, index) => {
      return <BlogItem data={item} key={item.id} />;
    });
    return (
      <div className="blog">
        <div className="grid wide">
          <h5>BLOG</h5>
          <br />
          <div className="blog__brief">Trendy News Feeds</div>
          <div className="row blog__list">{getListBlog}</div>
        </div>
        <a href="#!" className="blog__btn">
          View All
        </a>
        <div className="blog__img">
          <img src="./image/Path1.png" alt="" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    blog : state.blog
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetListBlog : () =>{
      dispatch(getListBlog())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(index);
