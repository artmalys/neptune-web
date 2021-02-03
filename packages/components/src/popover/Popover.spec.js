import React from 'react';
import { fireEvent, render, waitFor, screen } from '../test-utils';
import Popover from './Popover';
import { Breakpoint } from '../common';

jest.mock('./BottomSheet', () => {
  // eslint-disable-next-line react/prop-types
  return ({ open, children }) => {
    return open ? <div className="bottom-sheet">{children}</div> : null;
  };
});

describe('Popover', () => {
  const props = {
    arrow: true,
    content: 'content',
    intialOpen: false,
    placement: Popover.Placement.BOTTOM,
    title: 'title',
  };

  let container;
  describe('on desktop', () => {
    it('renders', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props} intialOpen>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(container).toMatchSnapshot();
    });

    it('renders arrow', async () => {
      let rerender;
      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props} arrow={false}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getArrow()).not.toBeInTheDocument();

      await waitFor(() => {
        rerender(
          <Popover {...props} arrow>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getArrow()).toBeInTheDocument();
    });

    it('opens/closes dropdown onClick', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getDropDown()).not.toBeInTheDocument();

      fireEvent.click(screen.getByText('Open'));

      expect(getDropDown()).toBeInTheDocument();

      fireEvent.click(screen.getByText('Open'));

      expect(getDropDown()).not.toBeInTheDocument();
    });

    it('close dropdown when clicking outside dropdown', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getDropDown()).not.toBeInTheDocument();

      fireEvent.click(screen.getByText('Open'));

      expect(getDropDown()).toBeInTheDocument();

      fireEvent.click(document);

      expect(getDropDown()).not.toBeInTheDocument();
    });

    it("doesn't close dropdown when clicking inside dropdown", async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getDropDown()).not.toBeInTheDocument();

      fireEvent.click(screen.getByText('Open'));

      expect(getDropDown()).toBeInTheDocument();

      fireEvent.click(getDropDown());

      expect(getDropDown()).toBeInTheDocument();
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      global.innerWidth = Breakpoint.SMALL - 1;
    });

    it('renders', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props} initialOpen>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(container).toMatchSnapshot();
    });

    it('opens/closes bottomSheet onClick', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getBottomSheet()).not.toBeInTheDocument();

      fireEvent.click(screen.getByText('Open'));

      expect(getBottomSheet()).toBeInTheDocument();

      fireEvent.click(screen.getByText('Open'));

      expect(getBottomSheet()).not.toBeInTheDocument();
    });
  });

  const getDropDown = () => container.querySelector('.np-popover__dropdown--open');
  const getBottomSheet = () => container.querySelector('.bottom-sheet');
  const getArrow = () => container.querySelector('.np-popover__dropdown__arrow');
});
