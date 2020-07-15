
import React, { Component, createRef } from 'react';


const bindRef = (WrappedComponent) => {
    // const ConvertRef = (props) => {
    class ConvertRef extends React.Component {
        render() {
            const { forwardedRef, ...other } = this.props;
            console.log(forwardedRef);
            return <div>
                <WrappedComponent {...other} ref={forwardedRef} />
                <div>1234567</div>
            </div>;
        }

    }
    // “ref”是保留字段需要用普通的字段来代替，传递给传入的组件
    return React.forwardRef((props, ref) => {
        console.log(ref);
        return <ConvertRef {...props} forwardedRef={ref} />;
    });
};

export default bindRef;