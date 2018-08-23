import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { btnText, btnClick, disabled } = props;
  return (
    <button disabled={disabled} className={`btn-primary`} onClick={btnClick}>
      <span>{btnText}</span>
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  btnClick: PropTypes.func,
  btnCls: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
