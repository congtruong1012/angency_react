import { combineReducers } from "redux";
import portfolio from "./portfolio_reducer";
import blog from "./blog_reducer";


 const myReducers = combineReducers({
    portfolio,
    blog

})

export default myReducers

