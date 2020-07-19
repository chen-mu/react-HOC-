import React from 'react';
import ComponentDemo from './component';
import PureComponentDemo from './pureComponent';


export default class Index extends React.Component{
    render(){
        return<div>
            <ComponentDemo></ComponentDemo>
            <PureComponentDemo></PureComponentDemo>
        </div>
    }    
}