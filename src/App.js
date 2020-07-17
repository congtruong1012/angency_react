import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import callAPI from "./API/callAPI";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     portfolio: [],
  //     blog: []
  //   };
  // }
  // async componentDidMount() {
  //   await callAPI('portfolio','GET',null)
  //     .then(res =>  this.setState({ portfolio : res.data} ))
  //     .catch(console.log);
  //   await callAPI('blog','GET',null)
  //     .then(res =>  this.setState({ blog : res.data} ))
  //     .catch(console.log);
  // }
  
  render() {
    
    //const { portfolio, blog } = this.state;
    return (
      <>
        <Header />
        <div className="main">
          <About />
          <Service />
          <Portfolio  />
          <Testimonials />
          <Blog  />
          <Contact />
        </div>
        <Footer />
        <a href="#!" className="back-to-top">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" className="svg-inline--fa fa-chevron-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
        </a>
        
      </>
    );
  }
}

export default App;
