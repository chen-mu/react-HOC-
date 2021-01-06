import React from 'react';

export default class Demo extends React.Component {


    componentWillUnmount() {
        console.log('第三层组件卸载');
    }


    render() {

        return <div>第三层组件</div>
    }
}
