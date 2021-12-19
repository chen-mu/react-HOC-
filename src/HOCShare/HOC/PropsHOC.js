import React from 'react';

@HOC2
@HOC1
// 
class PropsHOC extends React.Component {

  b = '属性代理';

  static a='属性代理'

  constructor(){
    super();
  }

  say = () => {
    console.log('我是业务组件的方法！')
  }

  render() {
    return <div> hello,world  </div>
  }
}

function HOC1(Component,options) { 
  return class wrapComponent extends React.Component {

    constructor(props){
      super(props);
      this.ref = React.createRef();

    }

    componentDidMount(){
      // console.log('我是HOC1中的componentDidMount',this.ref);
      // this.ref.current.say()
    }

    render() {

      return <div>
        <div>我这是第一层HOC1</div>
        <Component ref={this.ref} {...this.props} {...this.state} />
      </div>
      
    }
  }
}

function HOC2(Component,options) { 
  return class wrapComponent extends React.Component {

    componentDidMount(){
      console.log('我是HOC2中的componentDidMount');
    }

    render() {
      return <div>
      <div>我这是第二层HOC2</div>
      <Component {...this.props} {...this.state} />
    </div>
    
    }
  }
}

export default PropsHOC;
// console.log('PropsHOC.a===>',PropsHOC.a)




