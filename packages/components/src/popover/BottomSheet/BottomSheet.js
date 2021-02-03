import React, { forwardRef } from 'react';
import Types from 'prop-types';
import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';
import './BottomSheet.css';

const BottomSheet = forwardRef((props, ref) => {
  const { children, open } = props;

  return (
    <Dimmer open={open}>
      <SlidingPanel open={open} position="bottom" transparent>
        <div ref={ref} className="np-bottom-sheet p-x-2 p-t-4 p-b-2">
          {children}
        </div>
      </SlidingPanel>
    </Dimmer>
  );
});

BottomSheet.propTypes = {
  children: Types.node.isRequired,
  open: Types.bool,
};

BottomSheet.defaultProps = {
  open: false,
};

export default BottomSheet;
