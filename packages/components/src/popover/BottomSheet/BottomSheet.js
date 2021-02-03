import React from 'react';
import Types from 'prop-types';
import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';

const BottomSheet = ({ children, open }) => (
  <Dimmer open={open}>
    <SlidingPanel open={open} position="bottom">
      {children}
    </SlidingPanel>
  </Dimmer>
);

BottomSheet.propTypes = {
  children: Types.node.isRequired,
  open: Types.bool,
};

BottomSheet.defaultProps = {
  open: false,
};

export default BottomSheet;
