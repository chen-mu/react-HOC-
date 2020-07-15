//页面
import React from 'react';

import  Compontent1  from './compontent'

@Compontent1()
export default class Example extends React.Component {

  constructor(){
    super();
    this.state={};
    this.input = React.createRef
  }
  componentDidMount(){
    console.log(this.input)
}
    render() {
      return <input ref={this.input} name="name" {...this.props.name} />;
    }
  }
  

// export default Compontent1({name:'袁'})(Example)
// export default page({name:'袁'})(Compontent1)


// HOC 通过将组件包装在容器组件中来组成新组件。高阶组件对页面组件进行修饰。
//HOC对被包裹组件wrappedcomponent的props进行操作