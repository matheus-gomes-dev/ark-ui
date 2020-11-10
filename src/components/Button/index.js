import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Button = ({ label, disabled, isLoading, size = 'md' }) => (
  <button disabled={disabled || isLoading} className={`btn-${size}`}>
    {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default Button;
