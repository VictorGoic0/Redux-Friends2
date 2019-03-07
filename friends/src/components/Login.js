import React from 'react';
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected")
    })
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <input
        placeholder="Username"
        onChange={this.changeHandler}
        name="username"
        value={this.state.credentials.username}
        />
        <input
        placeholder="Password"
        onChange={this.changeHandler}
        name="password"
        value={this.state.credentials.password}
        />
        <button>Login</button>
      </form>
    )
  }
}

export default connect(
  null,
  { login }
)(Login);
