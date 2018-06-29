import * as enzyme from 'enzyme';
import HxMenu from './HxMenu';
import React from 'react';

const mount = (props = {}) => {
  return enzyme.mount(
    <HxMenu id='menuId' {...props}>
      <hx-menuitem>Action 1</hx-menuitem>
      <hx-menuitem>Action 2</hx-menuitem>
      <hx-menuitem>Action 3</hx-menuitem>
    </HxMenu>);
};

describe('HxMenu', () => {
  it('renders correctly with slot/child elements', () => {
    expect(mount().html()).toMatchSnapshot();
  });

  it('props.onOpen is called on WebComponent `open` event', () => {
    const onOpen = jest.fn();
    mount({onOpen})
      .instance()
      .hxRef
      .dispatchEvent(new Event('open'));

    expect(onOpen.mock.calls.length).toBe(1);
  });

  it('props.onClose is called on WebComponent `close` event', () => {
    const onClose = jest.fn();
    mount({onClose})
      .instance()
      .hxRef
      .dispatchEvent(new Event('close'));

    expect(onClose.mock.calls.length).toBe(1);
  });

  it('componentWillUnmount removes all event listeners', () => {
    const instance = mount().instance();
    instance.hxRef.removeEventListener = jest.fn();
    instance.componentWillUnmount();
    const listenersRemoved = instance.hxRef.removeEventListener.mock.calls.map((event) => event[0]);

    expect(listenersRemoved).toEqual(expect.arrayContaining(['open', 'close']));
  });
});
