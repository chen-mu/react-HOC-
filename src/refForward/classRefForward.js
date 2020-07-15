import React from 'react';

class InputChild extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    onDemo = () => {

    }

    render() {
        console.log('======');
        console.log(this.props);
        return (
            <div>
                <input ref={this.inputRef} defaultValue={this.props.children}></input>
            </div>
        )
    }
}


export default class App extends React.Component {
    constructor() {
        super()
        this.icRef = React.createRef();
    }
    //在父组件获取子组件的ref
    componentDidMount() {
        console.log('class中的');
        this.icRef.current.inputRef.current.focus() // input 获取焦点
    }

    render() {
        return <InputChild ref={this.icRef}>Click me!</InputChild>;
    }
}