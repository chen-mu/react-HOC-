import React from 'react';

//反向继承两大特点 渲染劫持和操作state
//注意点：在使用反向继承的时候，会出现相同函数被覆盖的情况，解决方法就是使用组件和页面中使用不同名的函数或者使用super来调用页面中的方法
//包括state中的同名变量也会被重写
export default function simpleHocDemo(options) {
    // console.log(options)
    let _sex = '男';
    return (WrappedComponent) => {

        class Demo1 extends WrappedComponent {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {
                console.log('反向代理的didmound')
                // let messagess = document.createElement('div');
                // messagess.innerHTML = '<p style="position:fixed;top:100px;z-index:10;background-color:red">消息类高阶组件！</p>';
                // document.getElementsByTagName('body')[0].appendChild(messagess);
                super.componentDidMount && super.componentDidMount();  // componentDidMount方法劫持，不覆盖
            }

            componentDidUpdate(prevProps, prevState, snapshot) {

                if (prevState && !prevState.isLoad && this.state.isLoad) {
                    // console.log(1111)
                    setTimeout(()=>{
                        // console.log(222)
                        // console.log(this.props);
                    },0)
                    
                    
                }
                super.componentDidUpdate && super.componentDidUpdate(prevProps, prevState, snapshot);
            }

            render() {
                // return super.render()
                return<div> 
                    {/* 这里进行渲染劫持，这里可以增加判断条件 */}
                    {super.render()}
                </div>
            }
        };
        return class Demo extends React.PureComponent {

            state = {
                sex: _sex
            }

            render() {

                const { sex } = this.state
                return <div>
                    {/* <div>反向代理：名字{options.name}</div> */}
                    <Demo1 sex={sex}></Demo1>                  
                </div>
            }
        }
    }
}


