import React from 'react';
import Demo from './demo';

// @Demo()
export default class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = { demo: 111111 }
        this.myDemo = React.createRef()
    }

    componentDidMount() {
        // console.log(this.refs)
    }

    onClick = () => {
        console.log(this.myDemo);
        this.myDemo.current.onRest()
        // console.log(this.myDemo);
        // console.log(this.props.onRest())
    }


    render() {

        // console.log(this.state)

        return <div>
            <button onClick={() => this.onClick()}> 点击</button>
            <Demo ref={this.myDemo}></Demo>
        </div>
    }
}