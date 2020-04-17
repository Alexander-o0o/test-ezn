import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from './Menu';
import Main from './Main';
import Login from './Login';
import News from './News';
import Profile from './Profile';
import ErrorMessage from './ErrorMessage';
import { doUserClearAuthenticationError } from '../actions/user';
import { getIsAuthenticated, getIsLoading, getError } from '../selectors/user';
import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    const {
      isAuthenticated,
      isLoading,
      error,
      userClearAuthenticationError,
    } = this.props;

    return (
      <div className="app">
        <div className="app__menu">
          <Menu />
        </div>
        <div className="app__main">
          <div className="app__main-content">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/login">
                {isAuthenticated ? <Redirect to="/profile" /> : <Login />}
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/profile">
                {!isAuthenticated ? <Redirect to="/login" /> : <Profile />}
              </Route>
            </Switch>
          </div>
        </div>
        {
          error && (
            <div className="app__error-message">
              <ErrorMessage text={error.message} onClose={userClearAuthenticationError} />
            </div>
          )
        }
        {
          isLoading && (
            <div className="app__loading-box" />
          )
        }
      </div>
    );
  }
}
App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape(),
  userClearAuthenticationError: PropTypes.func.isRequired,
};
App.defaultProps = {
  error: null,
};


const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  userClearAuthenticationError: () => dispatch(doUserClearAuthenticationError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
