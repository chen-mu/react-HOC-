import React from 'react';
import PropsHOC from './HOC/PropsHOC';
import ExtentHOC from './HOC/ExtentHOC';
import RefHOC from './HOC/RefHOC';

export default class Index extends React.Component {



  render() {
    return <div>
      {/* <PropsHOC /> */}
      {/* <ExtentHOC/> */}
      <RefHOC />
    </div>
  }
}




