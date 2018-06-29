import React from 'react';
import PropTypes from 'prop-types';

/**
 * <HxCheckbox /> wrapper for <hx-checkbox />
 *
 * @example docs https://rackerlabs.github.io/helix-ui/components/checkboxes/
 * @example element https://rackerlabs.github.io/helix-ui/elements/hx-checkbox/
 */

class HxCheckbox extends React.PureComponent {
  componentDidMount() {
    if (this.hxRef) {
      this.hxRef.addEventListener('change', this.props.onChange);
    }
  }

  componentWillUnmount() {
    if (this.hxRef) {
      this.hxRef.removeEventListener('change', this.props.onChange);
    }
  }

  setRef = (element) => { this.hxRef = element; };

  render() {
    const { onChange, ...hxProps } = this.props;
    return (<hx-checkbox {...hxProps} ref={this.setRef} />);
  }
}

HxCheckbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool
};

HxCheckbox.DefaultProps = {
  onChange: () => null
};

export default HxCheckbox;
