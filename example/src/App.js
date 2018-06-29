import React, { Component } from 'react';
import { HxMenu, HxCheckbox, HxSearch } from 'helix-react';

const checkChange = (event) => console.log('checkbox changed:', event);

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Checkbox states</h2>
          <table className='hxTable'>
            <thead>
              <tr>
                <th />
                <th>Unchecked</th>
                <th>Checked</th>
                <th>Indeterminate Unchecked</th>
                <th>Indeterminate Checked</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Default</td>
                <td><HxCheckbox onChange={checkChange} /></td>
                <td><HxCheckbox checked onChange={checkChange} /></td>
                <td><HxCheckbox indeterminate onChange={checkChange} /></td>
                <td><HxCheckbox checked onChange={checkChange} /></td>
              </tr>
              <tr>
                <td>Invalid</td>
                <td><HxCheckbox invalid onChange={checkChange} /></td>
                <td><HxCheckbox invalid checked onChange={checkChange} /></td>
                <td><HxCheckbox invalid indeterminate onChange={checkChange} /></td>
                <td><HxCheckbox invalid indeterminate checked onChange={checkChange} /></td>
              </tr>
              <tr>
                <td>Disabled</td>
                <td><HxCheckbox disabled onChange={checkChange} /></td>
                <td><HxCheckbox disabled checked onChange={checkChange} /></td>
                <td><HxCheckbox disabled indeterminate onChange={checkChange} /></td>
                <td><HxCheckbox disabled checked indeterminate onChange={checkChange} /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>Menu</h2>
          <hx-disclosure className='hxBtn' aria-controls='menuId'>
            <hx-icon type='cog' />
          </hx-disclosure>
          <HxMenu
            id='menuId'
            onOpen={() => console.log('menu opened')}
            onClose={() => console.log('menu closed')}
          >
            <hx-menuitem>Item 1</hx-menuitem>
            <hx-menuitem>Item 2</hx-menuitem>
          </HxMenu>
        </div>

        <div>
          <h2>Search</h2>
          <div style={{'width': '300px'}}>
            <HxSearch
              onKeyup={() => console.log('search key press')}
              onClear={() => console.log('search clear press')}
              onBlur={() => console.log('search blur')}
              onFocus={() => console.log('search focus')}
            />
          </div>
        </div>
      </div>
    );
  }
}
