import React from 'react';
import DynamicFlow from './DynamicFlow';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import decisionStep from './examples/decision.json';
import formStep from './examples/form.json';
import finalStep from './examples/final.json';
import layoutStep from './examples/layout.json';

export default {
  component: DynamicFlow,
  title: 'DynamicFlow',
};

export const basic = () => {
  const steps = {
    decision: decisionStep,
    form: formStep,
    final: finalStep,
    layout: layoutStep,
  };

  const specification = select('step', steps, decisionStep);

  const onClose = () => {
    console.log('onClose');
    action('onClose');
  };

  const onStepChange = (broadcastAction) => {
    console.log('onStepChange', broadcastAction);
    action('onStepChange');
  };

  return (
    <DynamicFlow specification={specification} onClose={onClose} onStepChange={onStepChange} />
  );
};