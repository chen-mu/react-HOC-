//页面
import React from 'react';

import  Compontent1  from './compontent'

// @Compontent1({name:'122333444'})
class Example extends React.Component {
  componentDidMount(){
    console.log('页面中的componentDidMount');
}
    render() {
      return <input name="name" {...this.props.name} />;
    }
  }
// export default page
export default Compontent1({name:'袁'})(Example)
// export default page({name:'袁'})(Compontent1)


// HOC 通过将组件包装在容器组件中来组成新组件。高阶组件对页面组件进行修饰。
//HOC对被包裹组件wrappedcomponent的props进行操作