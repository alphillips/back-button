import React from 'react';
import { Link, hashHistory } from 'react-router';

import './ui-kit.css';

export default function BackButton(props) {

  var linkStyle = {
    marginTop: "1em"
  };

  var onClick = function onClick(e) {
    if (props.goBack) {
      e.preventDefault();
      props.goBack();
    } else {
      e.preventDefault();
      hashHistory.goBack();
    }
  };

  return React.createElement(
    Link,
    { className: 'uikit-direction-link uikit-direction-link--left', style: linkStyle,
      onClick: onClick, href: '#' },
    props.label || 'Back'
  );
}