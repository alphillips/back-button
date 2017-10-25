import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({
  render() {
    return <div className="uikit-body">
      <h1>back-button Demo</h1>
      <Component/>
      <br />
      <Component label="Previous page"/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
