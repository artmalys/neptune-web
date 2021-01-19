import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import { usePopper } from 'react-popper';
import classnames from 'classnames';
import throttle from 'lodash.throttle';
import BottomSheet from './BottomSheet';

import { Position, Breakpoint } from '../common';
import './Detached.css';

const THROTTLE_MS = 100;

const Detached = ({
  arrow,
  children,
  extraStyles,
  fallbackPlacements,
  flip,
  offset,
  placement,
  referenceElement,
}) => {
  const [arrowElement, setArrowElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window?.innerWidth < Breakpoint.SMALL);
  const handleResize = () => {
    setIsMobile(window?.innerWidth < Breakpoint.SMALL);
  };
  useEffect(() => {
    window.addEventListener('resize', throttle(handleResize, THROTTLE_MS));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const modifiers = [];

  const modifiersOptions = {
    arrow: { element: arrowElement },
    flip: { fallbackPlacements },
  };

  modifiers.push({ name: 'offset', options: { offset } });

  if (arrow) {
    modifiers.push({ name: 'arrow', options: modifiersOptions.arrow });
  }
  if (flip) {
    modifiers.push({ name: 'flip', options: modifiersOptions.flip });
  }

  const { styles, attributes } = usePopper(referenceElement.current, popperElement, {
    placement,
    modifiers,
  });

  return isMobile ? (
    <BottomSheet open>{children}</BottomSheet>
  ) : (
    <div
      className={classnames('np-dropdown')}
      ref={setPopperElement}
      style={{ ...styles.popper, ...extraStyles }}
      {...attributes.popper}
    >
      {arrow && <div id="arrow" ref={setArrowElement} style={styles.arrow} />}
      {children}
    </div>
  );
};

Detached.Position = {
  TOP: Position.TOP,
  RIGHT: Position.RIGHT,
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
};

Detached.defaultProps = {
  arrow: false,
  extraStyles: undefined,
  fallbackPlacements: Detached.Position.TOP,
  flip: true,
  intialOpen: false,
  offset: [0, 12],
  placement: Detached.Position.TOP,
};

Detached.propTypes = {
  arrow: Types.bool,
  children: Types.node.isRequired,
  fallbackPlacements: Types.arrayOf(
    Types.oneOf([
      Detached.Position.TOP,
      Detached.Position.RIGHT,
      Detached.Position.BOTTOM,
      Detached.Position.LEFT,
    ]),
  ),
  extraStyles: Types.shape({}),
  flip: Types.bool,
  intialOpen: Types.bool,
  offset: Types.arrayOf(Types.number),
  placement: Types.oneOf([
    Detached.Position.TOP,
    Detached.Position.RIGHT,
    Detached.Position.BOTTOM,
    Detached.Position.LEFT,
  ]),
  referenceElement: Types.shape({ current: Types.instanceOf(Element) }).isRequired,
};

export default Detached;
