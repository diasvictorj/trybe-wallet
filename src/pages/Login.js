import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isBtnDisable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBtn = this.handleBtn.bind(this);
  }

  handleBtn() {
    const { email, password } = this.state;
    const minPasswordSize = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    // retirado de : https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    if (password.length >= minPasswordSize && emailRegex.test(email)) {
      return (this.setState(() => ({ isBtnDisable: false })));
    }
    return (this.setState(() => ({ isBtnDisable: true })));
  }

  handleChange(event) {
    const { value, type } = event.target;
    switch (type) {
    case ('email'):
      return (this.setState(() => ({
        email: value,
      }), this.handleBtn())
      );
    case ('password'):
      return (this.setState(() => ({
        password: value,
      }), this.handleBtn())
      );

    default:
      return null;
    }
  }

  render() {
    const { email, password, isBtnDisable } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <section id="login-inputs">
          <input
            type="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            id="submit-login-btn"
            disabled={ isBtnDisable }
            onClick
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

export default Login;
