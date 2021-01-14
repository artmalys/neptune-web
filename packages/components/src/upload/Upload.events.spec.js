import React from 'react';
import { shallow } from 'enzyme';
import Upload from '.';

describe('Upload (events)', () => {
  let component;
  const props = {
    onCancel: jest.fn(),
    onChange: jest.fn(),
    onFailure: jest.fn(),
    onStart: jest.fn(),
    onSuccess: jest.fn(),
  };

  describe('on shallow', () => {
    beforeEach(() => {
      component = shallow(<Upload {...props} />).dive();
      jest.restoreAllMocks();
    });

    it('increments dragCounter on dragenter', () => {
      component.find('.droppable').simulate('dragenter', new Event('event'));
      expect(component.instance().dragCounter).toEqual(1);
    });

    it('decrements dragCounter on dragleave', () => {
      component.find('.droppable').simulate('dragleave', new Event('event'));
      expect(component.instance().dragCounter).toEqual(-1);
    });

    it('reset dragCounter on drop', () => {
      component.find('.droppable').simulate('dragenter', new Event('event'));
      expect(component.instance().dragCounter).toEqual(1);
      component.find('.droppable').simulate('drop', new Event('event'));
      expect(component.instance().dragCounter).toEqual(0);
    });
  });
});
