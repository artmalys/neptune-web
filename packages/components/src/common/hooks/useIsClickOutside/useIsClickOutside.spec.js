import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import { fireEvent } from '../../../test-utils';

import { useIsClickOutside } from './useIsClickOutside';

const MockApp = () => <button type="button">Hello!</button>;

describe('useIsClickOutside', () => {
  it('returns true by default', () => {
    const ref = [{ current: {} }];
    const { result } = renderHook(() => useIsClickOutside({ ref }));
    expect(result.current).toEqual([true]);
  });
  describe('when click is not from ref', () => {
    it('returns true', () => {
      const ref = [{ current: document.createElement('div') }];
      const { result } = renderHook(() => useIsClickOutside({ ref }));
      expect(result.current).toEqual([true]);

      act(() => {
        fireEvent.click(document);
      });

      expect(result.current).toEqual([true]);
    });
  });

  describe('when click is from ref', () => {
    it('returns false', () => {
      render(<MockApp />);

      const { result } = renderHook(() =>
        useIsClickOutside({ ref: [{ current: { contains: () => true } }] }),
      );

      act(() => {
        fireEvent.click(document.querySelector('button'));
      });

      expect(result.current).toEqual([false]);
    });
  });
});
