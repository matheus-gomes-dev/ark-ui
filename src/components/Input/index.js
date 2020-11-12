import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label = '', type = 'text', error, value = '', onChange }) => (
  <div className="m-4 sm:m-8 h-12">
    <div className="mb-1">
      <label className={`font-medium ${error ? 'text-red-500' : 'text-gray-700'} text-sm pl-1`}>
        {label}
      </label>
    </div>
    <input
      type={type}
      className={`w-full text-gray-600 text-sm pl-2 ${error ? 'input-error' : ''}`}
      value={value}
      onChange={onChange}
    />
    {error && <div>
      <span className="text-xs text-red-500 pl-1">{error}</span>
    </div>}
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;