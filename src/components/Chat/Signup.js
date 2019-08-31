import React, { Component } from "react";
import "./styles.css";

class Signup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: ""
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.username);
  // }

  render() {
    return (
      <div className="form-container">
        <h1>Bora conversar</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="email">Qual seu email</label>
          <input
            type="email"
            name="username"
            onChange={this.handleChange}
            className="input"
          />
          <button className="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Signup;
