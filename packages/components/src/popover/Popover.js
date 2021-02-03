import React, { useEffect, useState, useRef } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import { usePopper } from 'react-popper';
import { Position, Breakpoint } from '../common';
import BottomSheet from './BottomSheet';
import { useClientWidth, useIsClickOutside } from '../common/hooks';

import './Popover.css';

const Popover = ({ arrow, children, content, initialOpen, placement, title }) => {
  const [arrowElement, setArrowElement] = useState(null);
  const [clientWidth] = window ? useClientWidth({ ref: window }) : 0;
  const referenceElement = useRef(null);
  const [isClickOutside] = useIsClickOutside({
    ref: referenceElement,
  });
  const [open, setOpen] = useState(initialOpen || false);
  const [popperElement, setPopperElement] = useState(null);

  useEffect(() => {
    if (isClickOutside) {
      setOpen(false);
    }
  }, [isClickOutside]);

  const isMobile = clientWidth && clientWidth < Breakpoint.SMALL;

  const modifiers = [];

  modifiers.push({ name: 'offset', options: { offset: [0, 12] } });
  modifiers.push({ name: 'flip' });

  if (arrow) {
    modifiers.push({ name: 'arrow', options: { padding: 5, element: arrowElement } });
  }

  const { styles, attributes } = usePopper(referenceElement.current, popperElement, {
    placement,
    modifiers,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const popoverContent = (
    <div className="np-popover__content">
      <div className="h5">{title}</div>
      {content}
    </div>
  );

  return (
    <span ref={referenceElement} className="d-inline-block">
      {/* setting ref on child wont work for React components without forwardRef  */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onClick: () => handleClick(),
        });
      })}

      <div className="np-popover">
        {isMobile ? (
          <BottomSheet open={open}>{popoverContent}</BottomSheet>
        ) : (
          <div
            className={classnames('np-popover__dropdown', { 'np-popover__dropdown--open': open })}
            ref={setPopperElement}
            style={{ ...styles.popper }}
            {...attributes.popper}
          >
            {arrow && (
              <div
                className="np-popover__dropdown__arrow"
                ref={setArrowElement}
                style={styles.arrow}
              />
            )}
            {popoverContent}
          </div>
        )}
      </div>
    </span>
  );
};

Popover.Placement = {
  TOP: Position.TOP,
  RIGHT: Position.RIGHT,
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
};

Popover.defaultProps = {
  arrow: true,
  initialOpen: false,
  placement: Popover.Placement.TOP,
  title: undefined,
};

Popover.propTypes = {
  arrow: Types.bool,
  children: Types.element.isRequired,
  content: Types.node.isRequired,
  initialOpen: Types.bool,
  placement: Types.oneOf([
    Popover.Placement.TOP,
    Popover.Placement.RIGHT,
    Popover.Placement.BOTTOM,
    Popover.Placement.LEFT,
  ]),
  title: Types.string,
};

export default Popover;
