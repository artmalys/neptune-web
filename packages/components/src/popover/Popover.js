import React, { useEffect, useState, useRef, useMemo } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import uniqid from 'uniqid';

import { usePopper } from 'react-popper';
import { logActionRequiredIf } from '../utilities';

import { Position, Breakpoint } from '../common';
import BottomSheet from './BottomSheet';
import { useClientWidth, useIsClickOutside } from '../common/hooks';

import './Popover.css';

const Popover = ({ arrow, children, content, preferredPlacement, title }) => {
  logActionRequiredIf(
    `Popover has deprecated the ${preferredPlacement} value for the 'preferredPlacement' prop. Please use ${deprecatePlacements[preferredPlacement]} instead.`,
    deprecatePlacements[preferredPlacement],
  );

  const [arrowElement, setArrowElement] = useState(null);
  const [clientWidth] = typeof window !== 'undefined' ? useClientWidth({ ref: window }) : 0;
  const referenceElement = useRef(null);
  const outsideClickRef = useRef(null);

  const isMobile = clientWidth && clientWidth < Breakpoint.SMALL;
  const [popperElement, setPopperElement] = useState(null);

  const [isClickOutside] = useIsClickOutside({
    ref: [outsideClickRef, referenceElement],
  });

  const [open, setOpen] = useState(false);

  const memoizedId = useMemo(() => uniqid('np-popover-'), []);

  useEffect(() => {
    if (isClickOutside) {
      setOpen(false);
    }
  }, [isClickOutside]);

  const modifiers = [
    {
      name: 'computeStyles',
      options: {
        adaptive: false, // true by default
      },
    },
    { name: 'offset', options: { offset: [0, 12] } },
    { name: 'flip' },
  ];

  if (arrow) {
    modifiers.push({ name: 'arrow', options: { padding: 5, element: arrowElement } });
  }

  const placement = deprecatePlacements[preferredPlacement] || preferredPlacement;

  const { styles, attributes } = usePopper(referenceElement.current, popperElement, {
    placement,
    modifiers,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const popoverContent = (
    <div className="np-popover__content" id={memoizedId} aria-hidden={!open} role="tooltip">
      <span className="sr-only">Tooltip:</span>
      <div className="h5">{title}</div>
      {content}
    </div>
  );

  return (
    <>
      <span className="np-popover d-inline-block" ref={referenceElement}>
        {/* setting ref on child won't work for React components without forwardRef  */}
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            onClick: () => handleClick(),
            'aria-describedby': memoizedId,
          });
        })}
      </span>

      {isMobile ? (
        <BottomSheet open={open} ref={outsideClickRef}>
          {popoverContent}
        </BottomSheet>
      ) : (
        <div ref={outsideClickRef}>
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
        </div>
      )}
    </>
  );
};

Popover.Placement = {
  TOP: Position.TOP,
  RIGHT: Position.RIGHT,
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
  LEFT_TOP: Position.LEFT_TOP,
  RIGHT_TOP: Position.RIGHT_TOP,
  BOTTOM_LEFT: Position.BOTTOM_LEFT,
  BOTTOM_RIGHT: Position.BOTTOM_RIGHT,
};

Popover.defaultProps = {
  arrow: true,
  preferredPlacement: Popover.Placement.TOP,
  title: undefined,
};

Popover.propTypes = {
  arrow: Types.bool,
  children: Types.node.isRequired,
  content: Types.node.isRequired,
  preferredPlacement: Types.oneOf([
    Popover.Placement.TOP,
    Popover.Placement.RIGHT,
    Popover.Placement.BOTTOM,
    /* @DEPRECATED Please use TOP instead. */
    Popover.Placement.LEFT_TOP,
    /* @DEPRECATED Please use TOP instead. */
    Popover.Placement.RIGHT_TOP,
    /* @DEPRECATED Please use BOTTOM instead. */
    Popover.Placement.BOTTOM_LEFT,
    /* @DEPRECATED Please use BOTTOM instead. */
    Popover.Placement.BOTTOM_RIGHT,
  ]),
  title: Types.string,
};

export const deprecatePlacements = {
  [Position.LEFT_TOP]: Popover.Placement.TOP,
  [Position.RIGHT_TOP]: Popover.Placement.TOP,
  [Position.BOTTOM_RIGHT]: Popover.Placement.BOTTOM,
  [Position.BOTTOM_LEFT]: Popover.Placement.BOTTOM,
};

export default Popover;
