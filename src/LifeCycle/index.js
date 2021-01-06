import React from 'react';
import SonLifeCycle from './son'
//react 16.3.0版本的生命周期demo
export default class LifeCycle extends React.Component {

    constructor() {
        super()
        console.log('父组件中constructor')
    }

    state = {
        change: 0,
        unLoad: false
    }

    // UNSAFE_componentWillMount() {
    //     console.log('父组件中的UNSAFE_componentWillMount');
    // }

    componentDidMount() {
        console.log('父组件中的componentDidMount');
    }

    // componentDidUpdate执行条件
    componentDidUpdate() {
        console.log('父组件中的componentDidUpdate');
    }

    static getDerivedStateFromProps(props, state) {
        //
        console.log('父组件中的getDerivedStateFromProps', props, state);
        return null;
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('在setState执行时，父组件中的不会执行');
    //     console.log('父组件中的componentWillReceiveProps', nextProps);
    // }

    componentWillUnmount() {
        console.log('父组件卸载');
    }


    render() {
        console.log('父组件中的render');
        const { change, unLoad } = this.state
        return <div>
            <div onClick={() => this.setState({ unLoad: true })}>卸载</div>
            {!unLoad
                ? <div>
                    生命周期展示
                    <button onClick={() => this.setState({ change: change + 1 })}>更改父组件state的值</button>
                    <SonLifeCycle
                        change={change} />
                </div>
                :
                null
            }
        </div >
    }
}

