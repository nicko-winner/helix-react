
import React from 'react';
import PropTypes from 'prop-types';

/**
 * <HxMenu /> wrapper for <hx-search />
 *
 * @example docs https://rackerlabs.github.io/helix-ui/components/search/
 * @example element https://rackerlabs.github.io/helix-ui/elements/hx-search/
 *
 */

class HxSearch extends React.Component {
  componentDidMount() {
    this.hxRef.addEventListener('clear', this.props.onClear);
    this.hxRef.addEventListener('keyup', this.props.onKeyup);
  }

  componentWillUnmount() {
    this.hxRef.removeEventListener('clear', this.props.onClear);
    this.hxRef.removeEventListener('keyup', this.props.onKeyup);
  }

  setRef = (element) => { this.hxRef = element; }
  onBlur = (e) => this.props.onBlur(e);
  onFocus = (e) => this.props.onFocus(e);

  render() {
    const {onClear, onKeyup, onBlur, onFocus, ...hxProps} = this.props;
    return (
      <hx-search
        {...hxProps}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref={this.setRef} />
    );
  }
}

HxSearch.propTypes = {
  onClear: PropTypes.func,
  onKeyup: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
};

HxSearch.defaultPropTypes = {
  onClear: () => null,
  onKeyup: () => null,
  onBlur: () => null,
  onFocus: () => null
};

export default HxSearch;
