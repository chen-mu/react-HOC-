import React from 'react';

@HOC1
class RefHOC extends React.Component {


  say = () => {
    console.log('我是业务组件的方法！')
  }

  render() {
    return <div> hello,world  </div>
  }
}

function HOC1(Component, options) {
   class WrapComponent extends React.Component {


    render() {
      const { forwardedRef, ...other } = this.props;
      return <div>
        <Component ref={forwardedRef} {...other} {...this.state} />
      </div>

    }
  }

  return React.forwardRef((props, ref) => {
    return <WrapComponent {...props} forwardedRef={ref} />
  })
}


// export default RefHOC;

class Test extends React.Component {

  constructor(){
    super();
    this.ref = React.createRef()
  }

  componentDidMount(){
    console.log('this.rrefes ==== >',this.ref.current);
  }

  render() {
    return <>
    <RefHOC ref={this.ref}/> 
    </>
    
  }
}

export default Test;






