import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.scss';

const ErrorMessage = ({ text, onClose }) => (
  <div className="error-message">
    <pre className="error-message__text">{ text }</pre>
    <button
      className="error-message__close-button"
      onClick={onClose}
      type="button"
    >
      close
    </button>
  </div>
);
ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorMessage;
