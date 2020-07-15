import React from 'react';

/**
 * refs转发指的是将父组件创建的ref传递给子组件的某个dom元素让父组件可以直接操作dom元素
 * 注意：refs转发指的是将父组件的ref转发给自组件的一个过程
 * 参考文章：https://www.codercto.com/a/89749.html
 */

// 我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
// 我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyButton ref={ref}>。
// React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数。
// 我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
// 当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。

const FancyButton = React.forwardRef((props, ref) => {
    console.log('-------');
    console.log(props);
    console.log('-------');
    return (
    <button ref={ref} className="FancyButton" onClick={()=> console.log('点击')}>
        {props.children}11111
    </button>
)});

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.ref = React.createRef();
    }

    componentDidMount(){
        console.log(this.ref.current);
    }
    
    render() {    
        return <FancyButton ref={this.ref} className='demo' name='yuan' >点击!</FancyButton>;
    }
} 