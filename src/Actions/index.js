import * as types from "./actionTypes"
import callAPI from "../API/callAPI"
export const listPortfolio = (portfolios)=>{
    return {
        type: types.LIST_PORTFOLIO,
        payload : portfolios
    }
}
export const getListPortfolio = () =>{
    return dispatch  => {
        callAPI("portfolio", "GET", null)
        .then(res => dispatch(listPortfolio(res.data)))
    }
}
export const listBlog = (blogs)=>{
    return {
        type: types.LIST_BLOG,
        payload : blogs
    }
}
export const getListBlog = () =>{
    return dispatch  => {
        callAPI("blog", "GET", null)
        .then(res => dispatch(listBlog(res.data)))
    }
}