import * as enzyme from 'enzyme';
import HxSearch from './HxSearch';
import React from 'react';

const mount = (props = {}) => {
  return enzyme.mount(
    <HxSearch {...props} />);
};

describe('HxSearch', () => {
  it('renders correctly', () => {
    expect(mount().html()).toMatchSnapshot();
  });

  it('props.onBlur is called on `blur` event', () => {
    const onBlur = jest.fn();
    mount({onBlur}).simulate('blur');
    expect(onBlur.mock.calls.length).toBe(1);
  });

  it('props.onFocus is called on `focus` event', () => {
    const onFocus = jest.fn();
    mount({onFocus}).simulate('focus');
    expect(onFocus.mock.calls.length).toBe(1);
  });

  it('componentDidMount adds event listeners', () => {
    const instance = mount().instance();
    instance.hxRef.addEventListener = jest.fn();
    instance.componentDidMount();
    const listenersAdded = instance.hxRef.addEventListener.mock.calls.map((event) => event[0]);
    // Note: `focus` and `blur` work without adding / removing event listeners.
    expect(listenersAdded).toEqual(expect.arrayContaining(['keyup', 'clear']));
  });

  it('componentWillUnmount removes all event listeners', () => {
    const instance = mount().instance();
    instance.hxRef.removeEventListener = jest.fn();
    instance.componentWillUnmount();
    const listenersRemoved = instance.hxRef.removeEventListener.mock.calls.map((event) => event[0]);
    // Note: `focus` and `blur` work without adding / removing event listeners.
    expect(listenersRemoved).toEqual(expect.arrayContaining(['keyup', 'clear']));
  });
});
