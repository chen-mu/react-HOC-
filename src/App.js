import React from 'react';
import { Provider } from 'mobx-react';
import store from './store';
import Home from './pages/home/index'
import Bdemo from './compontents/B';
import Ddemo from './compontents/D';
import Fdemo from './compontents/F';
import Recomment from './pages/recomment/index'

import Refcomponent from './refcomponent/index'

import Demo from './demo/index'
import Demo1 from './demo1/index'
import RefDemo from './refDemo/index'
import Fragment from './fragments/index'

import RefForward from './refForward/index'
import NormalRef from './refForward/normal'
import ClassForward from './refForward/classRefForward'


function App() {
  return (
    <div className="App">
      {/* <Bdemo></Bdemo> */}
      {/* <Fdemo></Fdemo> */}
      {/* <Ddemo></Ddemo> */}
      {/* <Recomment></Recomment>
      <Provider store={store}>
        <Home></Home>
      </Provider> */}
      {/* <Demo></Demo> */}
      {/* <Refcomponent></Refcomponent> */}
      {/* <RefDemo></RefDemo> */}
      {/* <Demo1></Demo1> */}
      <Fragment></Fragment>
      <RefForward></RefForward>
      <div>
        <NormalRef></NormalRef>
      </div>
      <div>
        <ClassForward></ClassForward>
      </div>
    </div>
  );
}

export default App;
