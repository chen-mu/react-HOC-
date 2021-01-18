import React from 'react';

// const Demo = () => {
//     return WrappedComponent => {

//         class Element extends WrappedComponent {
//             componentDidMount() {
//                 console.log(this)
//                 // console.log(this.props)
//                this.props.oninit.onCheck(this.state)
//             }
//             render() {
//                 // console.log(this.myDemo.current.style.color = 'red')
//                 return <div>
//                     {/* 这里进行渲染劫持，增加条件判断原组件是否渲染，也可以通过重写原组件的样式 */}
//                     {super.render()}
//                     {/* 11111 */}
//                 </div>
//             }

//         };
//         return class extends React.Component {
//             constructor(props) {
//                 super(props);
//                 this.div = React.createRef();
//                 this.myElement = React.createRef();
//             }
//             state = {
//                 count: 2
//             }

//             componentDidMount() {
//                 // console.log(this.state)
//                 this.div.current.style.color = 'red'

//                 // this.myElement.current.style.color = 'red'
//             }

//             oninit={
//                 onCheck : (value) => {
//                     this.setState({
//                         count:value.demo
//                     })
//                 },
//                 onRest : () => {
//                     this.setState({
//                         count: 0
//                     })
//                 }
//             }   
//             render() {

//                 const { count } = this.state
//                 console.log(this.state);

//                 return <div>
//                     <div ref={this.div} >11111</div>
//                     <Element
//                         oninit={this.oninit}
//                         {...this.props}
//                     />
//                     <p ref={this.myElement} >{count}</p>

//                 </div>
//             }
//         }
//     }
// }

// export default Demo;

export default class Demo extends React.Component {

    state = {
        count: 2
    }

    onRest = () => {
        console.log('执行')
        this.setState({
            count: 0
        })
    }

    render() {
        const { count } = this.state
        return <div>
            <p>{count}</p>
        </div>
    }
}