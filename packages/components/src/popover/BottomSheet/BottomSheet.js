import React from 'react';
import Types from 'prop-types';
import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';

const BottomSheet = ({ children, open }) => {
  return (
    <Dimmer open={open}>
      <SlidingPanel open={open} position="bottom">
        <div className="p-y-2 p-x-3">{children}</div>
      </SlidingPanel>
    </Dimmer>
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
