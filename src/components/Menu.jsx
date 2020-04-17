import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../selectors/user';
import './Menu.scss';

const Menu = ({ isAuthenticated }) => (
  <div className="menu">
    <nav className="menu__content">
      <Link className="menu__item" to="/">
        На главную
      </Link>
      <Link className="menu__item" to="/news">
        Новости
      </Link>
      <Link
        className="menu__item"
        to={`/${
          isAuthenticated ? 'profile' : 'login'
        }`}
      >
        Профиль
      </Link>
    </nav>
  </div>
);
Menu.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});


export default connect(mapStateToProps, undefined)(Menu);
