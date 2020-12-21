import React, { Component } from 'react'
// 使用React.memo代替以上的title组件
const Title = React.memo((props) => {
    console.log("我是title组件")
    return (
        <div>
            标题：  {props.title}
        </div>
    )
}, areEqual)

function areEqual(prevProps, nextProps) {
    console.log(prevProps.title, nextProps.title,);
    if (prevProps.title !== nextProps.title) {
        return true
    } else {
        //在mome中，reture false
        return false
    }

}

class Count extends React.PureComponent {
    render() {
        console.log("我是条数组件")
        return (
            <div>
                条数：{this.props.count}
            </div>
        )
    }
}

export default class Purememo extends Component {
    state = {
        title: 'React.memo使用',
        count: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <Title title={this.state.count}></Title>
                <Count count={this.state.count}></Count>
            </div>
        )
    }
}