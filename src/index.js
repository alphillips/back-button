import React from 'react';
import { Link,hashHistory } from 'react-router'

import './ui-kit.css'

export default function BackButton(props) {

  const linkStyle = {
    marginTop: "1em"
  };

  const onClick = (e) => {
    if(props.goBack){
      e.preventDefault()
      props.goBack()
    } else {
      e.preventDefault()
      hashHistory.goBack()
    }
  }

  return (
    <Link className="uikit-direction-link uikit-direction-link--left" style={linkStyle}
      onClick={onClick} href="#">
      Back
    </Link>
  )
}
