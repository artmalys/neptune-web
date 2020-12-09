import React, { cloneElement } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './CircularButton.css';

const Type = {
  ACCENT: 'accent',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
};

const Priority = {
  PRIMARY: 'primary',
  SCONDARY: 'secondary',
};

const CircularButton = ({ className, children, disabled, icon, priority, type, ...rest }) => {
  const classes = classNames(
    'btn',
    {
      'btn-primary': type === Type.ACCENT,
      'btn-success': type === Type.POSITIVE,
      'btn-danger': type === Type.NEGATIVE,
    },
    className,
  );

  const iconEl = icon.props.size !== 24 ? cloneElement(icon, { size: 24 }) : icon;

  return (
    <label className={`np-circular-btn ${priority} ${type}`}>
      <input
        type="button"
        aria-label={children}
        className={classes}
        disabled={disabled}
        {...rest}
      />
      {iconEl}
      <span className="np-circular-btn__label">{children}</span>
    </label>
  );
};

CircularButton.Type = Type;
CircularButton.Priority = Priority;

CircularButton.propTypes = {
  className: Types.string,
  children: Types.string.isRequired,
  disabled: Types.bool,
  icon: Types.element.isRequired,
  priority: Types.oneOf(Object.values(Priority)),
  type: Types.oneOf(Object.values(Type)),
  onClick: Types.func.isRequired,
};

CircularButton.defaultProps = {
  className: undefined,
  priority: CircularButton.Priority.PRIMARY,
  type: CircularButton.Type.ACCENT,
  disabled: false,
};

export default CircularButton;
