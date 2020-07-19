import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Portal extends Component {
    constructor() {
        super()
        this.state = {}
    }

    handleClick = () => {
        console.log(123213);
    }
    render() {
        return (
            <div>
                <div>Portal例子</div>
                <div onClick={this.handleClick}>
                    didididi
                    <div>
                        <Modal>
                            {[1, 2, 3, 4]}
                            <div style={{marginTop:'2rem'}}>
                                <Child></Child>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
//ReactDOM.createPortal(child, container)
// 第一个参数就是可渲染的react元素， 第二个参数就是要渲染在其下的节点。
class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        console.log(this.el);
        document.body.appendChild(this.el)
    }
    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    onClick = () => {
        console.log('点击')
    }
    render() {
        console.log(this.props)

        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        )
    }
}

function Child() {
    // 这个按钮的点击事件会冒泡到父元素
    // 因为这里没有定义 'onClick' 属性
    return (
        <div >
            <button>Click</button>
        </div>
    );
}
export default Portal;


