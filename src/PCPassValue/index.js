import React from 'react';

export default class Index extends React.Component {

    render() {
        return (<div>
            <Demo
                onClick={(res) => console.log(res)}
            />
        </div>)
    }

}

class Demo extends React.Component {
    state = {
        count: 0
    }

    // onClick=()=>{
    //     this.setState({
    //         count:2
    //     }, )

    // }

    render() {
        return (<div>
            <Demo1 onClick={this.props.onClick}></Demo1>
            {/* <button onClick = {()=>this.props.onClick(1111)}>子组件</button> */}
        </div>)
    }

}

class Demo1 extends React.Component {
    state = {
        count: 0
    }

    onClick = () => {
        this.setState({
            count: 2
        })

    }

    render() {
        return (<div>
            <button onClick={() => this.props.onClick(1111)}>子组件</button>
        </div>)
    }

}