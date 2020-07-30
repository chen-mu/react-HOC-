import React, { Component } from 'react'

/**
 *写法1:this.setState({
 *   count:count+1
 * }) 
 * 这个写法是对count同步执行，异步获取
 * 
 * 写法2:this.setState(state=>({count:state.count+1}))
 * 
 * 例如：
 function add() {
  this.setState({count: this.state.count + 1});
  this.setState({count: this.state.count + 1});
  this.setState({count: this.state.count + 1});
}
直观上来看，当上面的add函数被调用时，组件状态的count值被增加了3次，每次增加1，那后count被增加了3，但是，实际上的结果state只增加了1。
 
原因是因为调用this.setState时，并没有立即更改this.state，所以this.setState只是在反复设置同一个值而已，上面的code等同下面这样的。
function add() {
  const currentCount = this.state.count;
  this.setState({count: currentCount + 1});
  this.setState({count: currentCount + 1});
  this.setState({count: currentCount + 1});
}
所以每一次更新赋值更新操作都依靠的是currentCount

想要使最后的结果是3，实现代码如下：
add = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
这样，每次改变count时，都是prevState.count + 1，pervState是上一个状态的state，当每次setState之后，前一个状态都会改变，结果就是想要的3了。
如果需要立即setState 那么就需要传入一个函数来执行setState
 * 

 其他情况promise、setTimeout 的同步更新见例子
 */
class Demo extends Component {
    constructor() {
        super()
        this.count_dom = React.createRef()
    }
    state = {
        count: 0,
        demoCount: {}
    }

    updateCount = (payload) => {
        // console.log(payload);
        this.setState((state, props) => {
            console.log(state.demoCount);

            console.log('props', props);
            let currDemoCount = { ...state.demoCount, ...payload }
            return { demoCount: currDemoCount }
        }, () => { console.log(this.state.demoCount); })

        // this.setState({
        //     demoCount: { ...this.state.demoCount, ...payload }
        // }, () => console.log(this.state.demoCount))
    }

    /**异步更新：react事件监听回调里，setState是异步更新的 */

    update1 = () => {
        console.log(this.state);
        console.log('update1 更新前', this.state.count)
        // this.setState(state => ({ count: state.count + 1 }))
        this.setState(state => {
            console.log(state);
            let currCount = state.count + 1;
            return { count: currCount }
        })
        console.log('update1 更新后', this.state.count)
    }
    /**异步更新：react生命周期回调函数里，setState是异步更新的 */
    componentDidMount() {

        this.updateCount({ name: 111 })
        this.updateCount({ age: 222 })
        console.log('demo', this.state.demoCount);
        const { demoCount } = this.state
        this.setState({
            demoCount: { ...demoCount, demo3: '' }
        })
        this.updateCount({ sex: 333 })
    }
    /**同步更新：定时器回调  */
    update2 = () => {
        setTimeout(() => {
            console.log('定时器 更新前', this.state.count)
            this.setState(state => ({ count: state.count + 1 }))
            /**setState导致状态更新流程触发，更新完毕后才执行下面代码，所以这里为同步更新 */
            console.log('定时器 更新后', this.state.count)
        }, 1000)
    }
    /**同步更新：原生DOM事件监听回调---结合ref  */
    update3 = () => {
        let count_dom = this.count_dom.current
        console.log(count_dom)
        count_dom.onClick = () => {
            console.log(1111);
        }
        // count_dom.onclick = () => {
        //     console.log('原生DOM事件监听回调 更新前', this.state.count)
        //     this.setState(state => ({ count: state.count + 1 }))
        //     console.log('原生DOM事件监听回调 更新后', this.state.count)
        // }
    }
    /**同步更新：promise回调  */
    update4 = () => {
        Promise.resolve().then(value => {
            console.log('promise 更新前', this.state.count)
            this.setState(state => ({ count: state.count + 1 }))
            console.log('promise 更新后', this.state.count)
        })
    }
    render() {
        const { count } = this.state
        // console.log('render渲染', count)
        return (
            <>
                <h2 ref={this.count_dom}>{count}</h2>
                <button onClick={this.update1}>合成事件更新1</button>
                <button onClick={this.update2}>定时器更新2</button>

                <button onClick={this.update4}>promise更新4</button>
                <button onClick={this.update5}>更新5</button>
            </>
        );
    }
}

export default Demo;