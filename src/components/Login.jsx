/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doUserAuthentication } from '../actions/user';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInputValue: '',
      passwordInputValue: '',
    };

    this.handleLoginInputChange = this.handleLoginInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleLoginInputChange(event) {
    this.setState({ loginInputValue: event.target.value });
  }

  handlePasswordInputChange(event) {
    this.setState({ passwordInputValue: event.target.value });
  }

  handleSubmitButton(event) {
    const { userAuthentication } = this.props;
    const { loginInputValue, passwordInputValue } = this.state;

    userAuthentication(loginInputValue, passwordInputValue);
    event.preventDefault();
  }

  render() {
    return (
      <form className="login">
        <h3 className="login__title">
          Авторизация
        </h3>
        <div className="login__input">
          <label
            className="login__input-label"
            htmlFor="loginFormLogin"
          >
            Пользователь
          </label>
          <input
            id="loginFormLogin"
            className="login__input-textbox"
            onChange={this.handleLoginInputChange}
            type="text"
          />
        </div>
        <div className="login__input">
          <label
            className="login__input-label"
            htmlFor="loginFormPassword"
          >
            Пароль
          </label>
          <input
            id="loginFormPassword"
            className="login__input-textbox"
            onChange={this.handlePasswordInputChange}
            type="password"
          />
        </div>
        <button
          className="login__button"
          onClick={this.handleSubmitButton}
          type="submit"
        >
          Войти
        </button>
      </form>
    );
  }
}
Login.propTypes = {
  userAuthentication: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userAuthentication: (login, password) => dispatch(doUserAuthentication(login, password)),
});

export default connect(undefined, mapDispatchToProps)(Login);
