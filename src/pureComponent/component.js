import React from 'react';

export default class ComponentDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            isShow: false
        };
        console.log('constructor');
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.isShow === this.state.isShow) {
            return false
        }
        return true

    }

    changeState = () => {
        this.setState({
            isShow: true
        })
    };
    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.changeState}>Component点击</button>
                <div>{this.state.isShow.toString()}</div>
            </div>
        );
    }

}