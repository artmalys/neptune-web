import React from 'react';
import '@testing-library/jest-dom';
import { Plus } from '@transferwise/icons';
import { render, screen } from '../test-utils';

import CircularButton from './CircularButton';

describe('CircularButton', () => {
  const props = {
    children: 'Add money',
    icon: <Plus />,
    onClick: jest.fn(),
  };

  describe('defaults', () => {
    beforeEach(() => {
      render(<CircularButton {...props} />);
    });

    it('renders the text', () => {
      screen.getByText('Add money');
    });

    it('is not disabled', () => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('renders a button of type accent and priority primary', () => {
      expect(render(<CircularButton {...props} />).container).toMatchSnapshot();
    });
  });

  describe('button attributes', () => {
    it('disables the button if disabled', () => {
      render(<CircularButton {...props} disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('passes through custom classes if set', () => {
      render(<CircularButton {...props} className="catsarethebest" />);
      expect(screen.getByRole('label')).toHaveClass('catsarethebest');
    });
  });
});
