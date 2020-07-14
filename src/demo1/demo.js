
import React from 'react';

const Demo1 = (options) => {
    return Wrappercomponent => {
        return class extends React.Component {

            // state = {
            //     num3: 4
            // }

            componentDidMount() {
                console.log(options)
                let num = options.num1
                console.log(num)
                //通过传过来的入参，来请求接口
                this.setState({
                    num3: num
                })
            }

            //封装逻辑


            render() {
                const newProps = this.state
                return <div>

                    <div>1111</div>
                    <Wrappercomponent {...newProps} {...this.props} />
                </div>
            }
        }
    }


}

export default Demo1;
/**
 * 高阶组件属性继承的方式
 * 高阶组件（HOC）是一种基于React 的组合特性而形成的一个设计模式，是入参是一个组件出参是新组件的一个函数
 *
 * 1:属性代理的实现方式。
 *      首先：代理一定有代理方和被代理方；根据概念去理解，通过对被包裹的props修改再传递给该组件；从这个角度出发，高阶组件的入参与出参就是
 *      就是需要处理的方式。
 *      这里的代理方指的就是高阶组件里面的数据处理函数（方法），被代理方指的是props,通过props的改变来渲染页面。
 *      就该页面例子而言：两个入参，Wrappercomponent（页面组件）, options（高阶组件入参）,最后输出组件，组件中包含着
 *      的是经过封装逻辑处理的参数（props），<Wrappercomponent {...newProps} {...this.props} />
 *      高阶组件不修改原组件，只是修改对props进行修改。
 * 2:反向继承的实现方式。
 *      这里先通过高阶组件的调用（不考虑修饰器的实现，因为不好理解）；从 HOC(Usual) 来看；高阶组件HOC包裹了Usual，而之所以叫做反向继承
 *      是因为在高阶组件中Usual被继承，在反向继承的写法中，高阶组件能够全部继承页面组件的方法
 *
 * 高阶组件的作用
 * 抽取重复代码，实现组件复用，常见场景：页面复用。
 * 条件渲染，控制组件的渲染逻辑（渲染劫持），常见场景：权限控制。
 * 捕获/劫持被处理组件的生命周期，常见场景：组件渲染性能追踪、日志打点。
 */
