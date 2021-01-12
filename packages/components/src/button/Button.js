import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { logActionRequiredIf } from '../utilities';

import './Button.css';

import { Size, ControlType, Priority, Type } from '../common';

const deprecatedTypeMap = {
  [Type.PRIMARY]: ControlType.ACCENT,
  [Type.SECONDARY]: ControlType.ACCENT,
  [Type.LINK]: ControlType.ACCENT,
  [Type.PAY]: ControlType.POSITIVE,
  [Type.DANGER]: ControlType.NEGATIVE,
};

const typeClassMap = {
  [ControlType.ACCENT]: 'btn-accent',
  [ControlType.POSITIVE]: 'btn-positive',
  [ControlType.NEGATIVE]: 'btn-negative',
};

const priorityClassMap = {
  [Priority.PRIMARY]: 'btn-priority-1',
  [Priority.SECONDARY]: 'btn-priority-2',
  [Priority.TERTIARY]: 'btn-priority-3',
};

const oldTypePriorityMap = {
  [Type.DANGER]: Priority.SECONDARY,
  [Type.LINK]: Priority.TERTIARY,
  [Type.SECONDARY]: Priority.SECONDARY,
};

const establishPriority = ({ rawPriority, rawType, type }) => {
  // The old SECONDARY and LINK types now map to priorities. If they're still using one of
  // these old types, ignore whatever priority they've passed and use this instead.
  if (oldTypePriorityMap[rawType]) {
    return oldTypePriorityMap[rawType];
  }
  // Only ControlType.ACCENT supports tertiary styles
  if (rawPriority === Priority.TERTIARY && type !== ControlType.ACCENT) {
    return Priority.SECONDARY;
  }
  return rawPriority;
};

const Button = (props) => {
  const {
    block,
    children,
    className,
    disabled,
    htmlType,
    loading,
    priority: rawPriority,
    size,
    type: rawType,
    ...rest
  } = props;

  logActionRequired(props);

  const type = deprecatedTypeMap[rawType] || rawType;
  const priority = establishPriority({ type, rawPriority, rawType });

  const classes = classNames(
    `btn btn-${size}`,
    `np-btn np-btn-${size}`,
    {
      'btn-loading': loading,
      'btn-block np-btn-block': block,
    },
    typeClassMap[type],
    priorityClassMap[priority],
    className,
  );

  return (
    /* eslint-disable react/button-has-type */
    <button type={htmlType} className={classes} disabled={disabled || loading} {...rest}>
      {children}
      {loading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

const deprecatedTypeMapMessage = {
  [Type.DANGER]: 'Button.Type.NEGATIVE',
  [Type.LINK]: 'Button.Type.ACCENT with priority Button.Priority.TERTIARY',
  [Type.PAY]: 'Button.Type.POSITIVE',
  [Type.PRIMARY]: 'Button.Type.ACCENT',
  [Type.SECONDARY]: 'Button.Type.ACCENT with priority Button.Priority.SECONDARY',
};

const deprecatedTypes = Object.keys(deprecatedTypeMap);

function logActionRequired({ size, type }) {
  logActionRequiredIf(
    'Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.',
    size === Size.EXTRA_SMALL,
  );
  logActionRequiredIf(
    `Button has deprecated the ${type} value for the \`type\` prop. Please update to ${deprecatedTypeMapMessage[type]}.`,
    deprecatedTypes.includes(type),
  );
}

Button.Priority = Priority;
Button.Type = { ...Type, ...ControlType };
Button.Size = {
  EXTRA_SMALL: Size.EXTRA_SMALL,
  SMALL: Size.SMALL,
  MEDIUM: Size.MEDIUM,
  LARGE: Size.LARGE,
};

Button.propTypes = {
  block: Types.bool,
  children: Types.node.isRequired,
  className: Types.string,
  disabled: Types.bool,
  htmlType: Types.oneOf(['submit', 'reset', 'button']),
  loading: Types.bool,
  // eslint-disable-next-line
  onClick: requiredIf(Types.func, (props) => props.htmlType !== 'submit'),
  priority: Types.oneOf([Priority.PRIMARY, Priority.SECONDARY, Priority.TERTIARY]),
  /** @DEPRECATED Type.PRIMARY, Type.PAY, Type.SECONDARY, Type.DANGER, Type.LINK */
  type: Types.oneOf([
    ControlType.ACCENT,
    ControlType.POSITIVE,
    ControlType.NEGATIVE,
    Type.PRIMARY,
    Type.PAY,
    Type.SECONDARY,
    Type.DANGER,
    Type.LINK,
  ]),
  /** @DEPRECATED Size.EXTRA_SMALL */
  size: Types.oneOf([Size.EXTRA_SMALL, Size.SMALL, Size.MEDIUM, Size.LARGE]),
};

Button.defaultProps = {
  block: false,
  className: null,
  disabled: false,
  htmlType: 'button',
  loading: false,
  priority: Button.Priority.PRIMARY,
  size: Button.Size.MEDIUM,
  type: Button.Type.ACCENT,
};

export default Button;
