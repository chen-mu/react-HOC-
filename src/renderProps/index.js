import React from 'react';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        console.log(mouse)
        return (
            <p style={{ position: 'absolute', left: mouse.x, top: mouse.y }} >我在这</p>
        );
    }
}

// <Mouse> 组件封装了我们需要的行为...
class Mouse extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {

        console.log(this.props)
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/* ...但我们如何渲染 <p> 以外的东西? */}
                <p>当前鼠标位置 ({this.state.x}, {this.state.y})</p>
                {/* <Cat mouse={this.state} /> */}
                {!!this.props.render && this.props.render(this.state)}
            </div>
        );
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <>
                {/* <h1>移动鼠标!</h1> */}
                <Mouse
                    render={mouse => (
                        <Cat mouse={mouse} />
                    )}
                />
            </>
        );
    }
}