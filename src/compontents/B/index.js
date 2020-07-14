// B/index.js

import React, { Component } from 'react';
import simpleHoc from '../A/index';

@simpleHoc({
    name: 'yuanyang',
    age: 24
})
export default class Usual extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.myRefs = React.createRef()
    }


    componentDidMount() {
        console.log('业务组件')
        this.myRefs.current.style.color='red'
        // console.log(this.myRefs)  
    }

    render() {
        //   console.log(this.props)
        return (
            <div ref={this.myRefs}>
                性别：{this.props.sex}
            </div>
        )
    }
}

