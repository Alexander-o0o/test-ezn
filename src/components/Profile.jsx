/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doUserLogout } from '../actions/user';
import './Profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleSubmitButton(event) {
    const { userLogout } = this.props;

    userLogout();
    event.preventDefault();
  }

  render() {
    return (
      <form className="profile">
        <h3 className="profile__title">
          Профиль
        </h3>
        <button
          className="profile__button"
          onClick={this.handleSubmitButton}
          type="submit"
        >
          Выйти
        </button>
      </form>
    );
  }
}
Profile.propTypes = {
  userLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userLogout: (profile, password) => dispatch(doUserLogout(profile, password)),
});

export default connect(undefined, mapDispatchToProps)(Profile);
