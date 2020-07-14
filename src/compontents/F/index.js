// B/index.js

import React, { Component } from 'react';
import simpleHoc from '../E/index';

class Usual extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // this.myRefs = React.createRef()
    }


    componentDidMount() {
        // this.myRefs.current.style.color = 'red'
    }
    fouceOn = () => {
        // this.myRefs.current.focus()
    }

    render() {
        console.log(this.props.getRef);
        return (<div>
            <div >
                性别：{this.props.sex}
                类型：{this.props.type}
            </div>
            <input  {...this.props} />
            <button onClick={() => this.fouceOn()}>获取input焦点</button>
        </div>
        )
    }
}

const demo = simpleHoc({ name: 1 })(Usual)
// const demo = simpleHoc(Usual)

export default demo;
