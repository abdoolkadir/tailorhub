import React from 'react';

const FormInputGroup = ({ name, value, placeholder, type, onChange }) => {
  return (
    <input
      required
      type={type}
      name={name}
      className="form-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

FormInputGroup.defaultProps = {
  type: 'text'
};

export default FormInputGroup;
