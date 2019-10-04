const React = require('react');
const PropTypes = require('prop-types');

class Chevron extends React.PureComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"
        style={this.props.direction === 'right' ? {transform: 'rotate(180deg)'} : null}
      >
        <defs>
          <path id="icon-closeable-card-chevron" d="M7.644 7.997L11.24 4.4l-.849-.848-4.445 4.445 4.45 4.448.848-.848z"/>
        </defs>
        <g fill="black" fillRule="evenodd">
          <use fillRule="nonzero" xlinkHref="#icon-closeable-card-chevron"/>
        </g>
      </svg>
    );
  }
}

Chevron.propTypes = {
  direction: PropTypes.oneOf(['right', 'left']).isRequired
};

module.exports = Chevron;
