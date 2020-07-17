import React, { Component } from "react";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      budget: 0,
      message: "",
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onHandleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };
  render() {
    return (
      <div className="contact">
        <div className="grid wide">
          <h5>CONTACT</h5>
          <br />
          <div className="contact__brief">Send Us a Messange</div>
          <form onSubmit={this.onHandleSubmit}>
            <div className="row contact__list">
              <div className="col l-6 m-12 c-12">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    className="name"
                    placeholder="Name"
                    onChange={this.onHandleChange}
                  />
                </div>
              </div>
              <div className="col l-6 m-12 c-12">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.onHandleChange}
                  />
                </div>
              </div>
              <div className="col l-6 m-12 c-12">
                <div className="input-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={this.onHandleChange}
                  />
                </div>
              </div>
              <div className="col l-6 m-12 c-12">
                <div className="input-group">
                  <select
                    name="budget"
                    onChange={this.onHandleChange}
                    value={this.state.budget}
                  >
                    <option value={0}>Budget</option>
                    <option value={1}>Budget1</option>
                    <option value={2}>Budget2</option>
                  </select>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="input-group">
                  <textarea
                    className="height"
                    placeholder="Message"
                    rows={30}
                    defaultValue={""}
                    name="message"
                    onChange={this.onHandleChange}
                  />
                </div>
              </div>
              <button type="submit" className="contact__btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="contact__img">
          <img src="./image/group224.png" alt="" />
        </div>
      </div>
    );
  }
}

export default index;
