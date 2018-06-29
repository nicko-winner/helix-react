import HxCheckbox from './HxCheckbox';
import React from 'react';
import * as enzyme from 'enzyme';

const mount = (props = {}) => {
  return enzyme.mount(<HxCheckbox {...props} />);
};

describe('HxCheckbox', () => {
  it('renders correctly', () => {
    expect(mount().html()).toMatchSnapshot();
  });

  describe('Checked', () => {
    it('renders correctly', () => {
      expect(mount({checked: true}).html()).toContain('checked');
    });
  });

  describe('Disabled', () => {
    it('renders correctly', () => {
      expect(mount({disabled: true}).html()).toContain('disabled');
    });
  });

  it('props.onChange is called on WebComponent `change` event', () => {
    const onChange = jest.fn();
    mount({onChange})
      .instance()
      .hxRef
      .dispatchEvent(new Event('change'));

    expect(onChange.mock.calls.length).toBe(1);
  });

  it('componentWillUnmount removes all event listeners', () => {
    const instance = mount().instance();
    instance.hxRef.removeEventListener = jest.fn();
    instance.componentWillUnmount();
    const listenersRemoved = instance.hxRef.removeEventListener.mock.calls.map((event) => event[0]);
    expect(['change']).toEqual(expect.arrayContaining(listenersRemoved));
  });
});
