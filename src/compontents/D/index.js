// B/index.js

import React, { Component } from 'react';
import simpleHocDemo from '../C/index';

// @simpleHocDemo({
//   name: 'yuanyang',
//   age: 24
// })
 class UsualDemo extends Component {

  state = { isLoad: false }

  componentDidMount() {
    this.setState({
      isLoad:true
    })
    console.log('父组件的didmound')
  }

  render() {

    return (
      <div>
        性别：{this.props.sex}
      </div>
    )
  }
}

const demo = simpleHocDemo()(UsualDemo)

export default demo

