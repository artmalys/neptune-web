import React, { useEffect, useState, useRef, useCallback } from 'react';
import Types from 'prop-types';

import './Popover.css';

import { Position } from '../common';
import Detached from './Detached';

const Popover = ({ children, content, fallbackPlacements, flip, intialOpen, placement, title }) => {
  const referenceElement = useRef(null);
  const [open, setOpen] = useState(intialOpen || false);

  // This instance has to be stored this way so it won't change and can be removed with removeEventListener
  const closePopoverOnOutsideClick = useCallback((event) => {
    if (!referenceElement.current.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', closePopoverOnOutsideClick, true);
    } else {
      document.removeEventListener('click', closePopoverOnOutsideClick, true);
    }
  }, [open]);

  return (
    <span ref={referenceElement} className="d-inline-block">
      {/* setting ref on child wont work for React components without forwardRef  */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onClick: () => handleClick(),
        });
      })}

      {open && (
        <div className="np-popover__dropdown">
          <Detached
            arrow
            extraStyles={{ maxWidth: 252 }}
            fallbackPlacements={fallbackPlacements}
            flip={flip}
            placement={placement}
            referenceElement={referenceElement}
          >
            {title && <div className="h5">{title}</div>}
            <div className="np-popover__content m-t-1">{content}</div>
          </Detached>
        </div>
      )}
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
  fallbackPlacements: [Popover.Placement.TOP],
  flip: true,
  intialOpen: false,
  placement: Popover.Placement.TOP,
};

Popover.propTypes = {
  children: Types.element.isRequired,
  content: Types.node.isRequired,
  fallbackPlacements: Types.arrayOf(
    Types.oneOf([
      Popover.Placement.TOP,
      Popover.Placement.RIGHT,
      Popover.Placement.BOTTOM,
      Popover.Placement.LEFT,
    ]),
  ),
  flip: Types.bool,
  intialOpen: Types.bool,
  placement: Types.oneOf([
    Popover.Placement.TOP,
    Popover.Placement.RIGHT,
    Popover.Placement.BOTTOM,
    Popover.Placement.LEFT,
  ]),
  title: Types.string.isRequired,
};

export default Popover;
