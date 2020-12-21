//页面
import React from 'react';
import './index.css'

export default class Example extends React.Component {

    state = {
        count: 0
    }

    componentDidMount() {
        const domTop = document.querySelector('.content__top')
        const domBottom = document.querySelector('.content__bottom')
        domTop.addEventListener('click', () => {
            console.log('上层事件')
        })
        domBottom.addEventListener('click', (e) => {
            console.log('下层事件');
            // e.stopPropagation()
            this.changeCount()
        })
    }

    changeCount = () => {
        const { count } = this.state
        const updateCount = count + 1
        this.setState({
            count: updateCount
        })
    }

    render() {
        const { count } = this.state
        return <div className="page__content">
            <div className="content__top">
                <div className="demo" onClick={() => console.log('点击了11111')} >11111111</div>
                absolute上层
            </div>
            <div className="content__bottom ">
                absolute下层
            </div>

            <div className='show' onClick={this.changeCount}>点击了下层事件{count}</div>

        </div>
    }
}
