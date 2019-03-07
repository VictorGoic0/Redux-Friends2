import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input
        placeholder="Username"
        onChange={this.changeHandler}
        name="username"
        value={this.state.username}
        />
        <input
        placeholder="Password"
        onChange={this.changeHandler}
        name="password"
        value={this.state.password}
        />
        <button>Login</button>
      </form>
    )
  }
}

export default Login;
