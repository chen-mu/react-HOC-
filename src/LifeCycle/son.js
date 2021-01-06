import React from 'react';
import Demo from './demo'

export default class Son extends React.Component {

    constructor(props, content, updater, demo) {
        super(props, content, updater)
        console.log('子组件中constructor', 'props===>', props, 'content===>', content, 'update===>', updater, 'demo===>', demo)
    }

    state = {
        change: 0,
        currIndex: 0
    }

    // UNSAFE_componentWillMount() {
    //     console.log('子组件中的componentWillMount');
    // }

    componentDidMount() {
        console.log('子组件中的componentDidMount');
    }



    // getDerivedStateFromProps 不能与componentWillMount 共存;getDerivedStateFromProps是静态方法不能用this直接调用组件中的方法
    // 在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，
    //getDerivedStateFromProps 的存在只有一个目的：让组件在 props 变化时更新 state。
    static getDerivedStateFromProps(nextprops, prestate) {

        console.log('子组件中的getDerivedStateFromProps', nextprops, prestate);
        if (nextprops) {
            return {
                change: nextprops.change
            }
        }
        return null;
    }

    // shouldComponentUpdate 返回false之后,getSnapshotBeforeUpdate和componentDidUpdate 就不会执行
    //目前，如果 shouldComponentUpdate() 返回 false，则不会调用 UNSAFE_componentWillUpdate()，render() 和 componentDidUpdate()。
    shouldComponentUpdate(nextProps, nextState) {
        console.log('子组件中的shouldComponentUpdate', nextProps, nextState);
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('子组件getSnapshotBeforeUpdate===>', prevProps, prevState);
        return '你好'
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('子组件的componentDidUpdate', prevProps, prevState, '子组件中的componentDidUpdate进来的snapshot', snapshot);
    }


    componentWillUnmount() {
        console.log('子组件卸载');
    }


    render() {
        console.log('子组件中的render');
        const { change, currIndex } = this.state;
        return <div>子组件生命周期展示<p>{change}</p>
            <Demo />
            <div onClick={() => this.setState({ currIndex: currIndex + 1 })}>{currIndex}</div>
        </div>
    }
}
