import React from 'react';
import PropTypes from 'prop-types';

/**
 * <HxMenu /> wrapper for <hx-menu />
 *
 * @example docs https://rackerlabs.github.io/helix-ui/components/menus/
 * @example element https://rackerlabs.github.io/helix-ui/elements/hx-menu/
 */

class HxMenu extends React.PureComponent {
  componentDidMount() {
    if (this.hxRef) {
      this.hxRef.addEventListener('close', this.props.onClose);
      this.hxRef.addEventListener('open', this.props.onOpen);
    }
  }

  componentWillUnmount() {
    if (this.hxRef) {
      this.hxRef.removeEventListener('close', this.props.onClose);
      this.hxRef.removeEventListener('open', this.props.onOpen);
    }
  }

  setRef = (element) => { this.hxRef = element; };

  render() {
    const { onOpen, onClose, ...hxProps } = this.props;
    return (
      <hx-menu {...hxProps} ref={this.setRef}>
        {this.props.children}
      </hx-menu>
    );
  }
}

HxMenu.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.array
};

HxMenu.defaultProps = {
  onOpen: () => null,
  onClose: () => null
};

export default HxMenu;
