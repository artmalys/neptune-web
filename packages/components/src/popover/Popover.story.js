import React from 'react';
import Popover from './Popover';
import Button from '../button';

export default {
  component: Popover,
  title: 'Popover',
};

export const basic = () => {
  return (
    <Popover
      intialOpen={false}
      title="Guaranteed rate"
      content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
      fallbackPlacements={[Popover.Placement.RIGHT, Popover.Placement.TOP]}
      placement={Popover.Placement.BOTTOM}
    >
      <Button type={Button.Type.PRIMARY} onClick={() => alert("I'm replaced")}>
        Click here to Open Popover!
      </Button>
    </Popover>
  );
};
