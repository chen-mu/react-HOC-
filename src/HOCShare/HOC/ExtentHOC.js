import React from 'react';


@HOC1
// @HOC2
export default class ExtentHOC extends React.Component {

  b = '反向继承'
  static a='反向继承'

  constructor(){
    super();
  }

  componentDidMount(){
    console.log('业务组件中的componentDidMount');
  }

  say = () => {
    console.log("我是业务组件里面的方法");
  }

  render() {
    return <div> hello,world  </div>
  }
}
function HOC1(Component) {

  return class wrapComponent extends Component {


    componentDidMount(){
      console.log('第一层高阶组件中的componentDidMount',this);
      this.say()
    }

    render() {

      return <div>
        {super.render()}
      </div>
    }

  }
}

function HOC2(Component) {

  return class wrapComponent extends Component {


    componentDidMount(){
      console.log('第二层高阶组件中的componentDidMount');
      this.say()
    }

    render() {

      return <div>
        {super.render()}
      </div>
    }

  }
}  

console.log('ExtentHOC==>',ExtentHOC.a);
