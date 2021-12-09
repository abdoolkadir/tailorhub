import React from 'react';
import PropTypes from 'prop-types';

const FormInputGroup = ({ name, value, placeholder, type }) => {
  return (
    <input
      type={type}
      name={name}
      className="form-input"
      placeholder={placeholder}
      value={value}
    />
  );
};

FormInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

FormInputGroup.defaultProps = {
  type: 'text'
};

export default FormInputGroup;
