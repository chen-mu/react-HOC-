import React from 'react';

let iscount = 0
export default class Index extends React.Component {


    constructor(){
        super()
        this.state={count:++iscount}
        console.log(iscount)
    }

    state = {
        count: 0,
        name: '11111',
    }

    onSetState = (state, props) => {
        console.log(state)
        return { count: state.count + 1 };
    }

    onChangeCount = () => {
        const { count } = this.state
        //当给setState传入一个函数时，并不会

        // this.setState((state) => ({
        //     count: state.count + 1
        // }))
        // this.setState((state) => ({
        //     count: state.count + 1
        // }))

        // this.setState(this.onSetState)
        // this.setState(this.onSetState)
        // this.setState(this.onSetState)
        this.setState({
            count: count + 1
        })
        // this.setState({
        //     count: count + 2
        // })
    }

    render() {
        console.log('执行');
        const { count } = this.state;
        console.log(count)
        return <div>
            {count}
            <button onClick={this.onChangeCount}>点击</button>
        </div>
    }

}  