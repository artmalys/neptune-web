import React from 'react';
import { select } from '@storybook/addon-knobs';
import Alert from '../alert';
import Popover, { deprecatePlacements } from './Popover';
import Button from '../button';

export default {
  component: Popover,
  title: 'Popover',
};

export const basic = () => {
  const preferredPlacement = select(
    'preferredPlacement',
    Object.values(Popover.Placement),
    Popover.Placement.TOP,
  );
  return (
    <>
      {deprecatePlacements[preferredPlacement] && (
        <Alert
          message={`${preferredPlacement} has been deprecated. Please use ${deprecatePlacements[preferredPlacement]} instead`}
          type={Alert.Type.WARNING}
        />
      )}
      <Popover
        title="Guaranteed rate"
        content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
        preferredPlacement={preferredPlacement}
      >
        <Button type={Button.Type.PRIMARY} onClick={() => console.log("I'm replaced")}>
          Click here to Open Popover!
        </Button>
      </Popover>
    </>
  );
};
