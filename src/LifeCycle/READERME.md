## react 16.3.0版本生命周期

### 在挂载阶段执行
父组件中constructor
父组件中的componentWillMount
父组件中的render
子组件中constructor
子组件中的componentWillMount
子组件中的render
子组件中的componentDidMount
父组件中的componentDidMount


#### 注意的第一点：父组件的componentDidMount是在子组件的componentDidMount执行完之后再去执行

### 在渲染阶段执行

父组件中的getDerivedStateFromProps {} 
父组件中的render
子组件中的getDerivedStateFromProps {change: 1} {change: 0}
子组件中的shouldComponentUpdate {change: 1} {change: 1}
子组件中的render
子组件getSnapshotBeforeUpdate===> {change: 0} {change: 0}
子组件的componentDidUpdate {change: 0} {change: 0} 子组件中的componentDidUpdate进来的snapshot 你好

