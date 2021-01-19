import React from 'react';
import Types from 'prop-types';
import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';

const BottomSheet = ({ children, open }) => {
  return (
    <div>
      <Dimmer open={open} className="visible-xs hidden-sm hidden-md hidden-lg">
        <SlidingPanel open={open} position="bottom">
          {children}
        </SlidingPanel>
      </Dimmer>
    </div>
  );
};

BottomSheet.propTypes = {
  children: Types.node.isRequired,
  open: Types.bool,
};

BottomSheet.defaultProps = {
  open: false,
};

export default BottomSheet;
