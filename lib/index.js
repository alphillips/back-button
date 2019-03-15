'use strict';

exports.__esModule = true;
exports.default = BackButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('./ui-kit.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BackButton(props) {

  var linkStyle = {
    marginTop: "1em"
  };

  var onClick = function onClick(e) {
    if (props.goBack) {
      e.preventDefault();
      props.goBack();
    } else {
      e.preventDefault();
      _reactRouter.hashHistory.goBack();
    }
  };

  return _react2.default.createElement(
    _reactRouter.Link,
    { className: 'uikit-direction-link uikit-direction-link--left', style: linkStyle,
      onClick: onClick, href: '#' },
    props.label || 'Back'
  );
}
module.exports = exports['default'];