import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';

const renderLabel = (label, isLoading, success) => {
  if (isLoading) return <FontAwesomeIcon icon={faSpinner} spin />;
  if (success) return <FontAwesomeIcon icon={faCheck} />;
  return label;
};

const Button = ({ label, disabled, success, isLoading, size = 'md', onClick }) => (
  <button disabled={disabled || isLoading || success} className={`btn-${size}`} onClick={onClick}>
    {renderLabel(label, isLoading, success)}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  success: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;
