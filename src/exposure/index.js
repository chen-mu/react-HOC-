//页面
import React from 'react';
import './index.css'

// 页面中曝光demo
export default class Example extends React.Component {


    isExprose = []

    componentDidMount() {
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entriesItem => {
                if (entriesItem.intersectionRatio) {
                    if (this.isExprose.indexOf(entriesItem.target.id) === -1) {
                        this.isExprose.push(entriesItem.target.id)
                        console.log(entriesItem.target.id + '出现了');
                    }
                } else {
                    console.log(entriesItem.target.id + '消失了');
                }
            })
        }, {
            root: document.querySelector('.exposure__content'),
            rootMargin: '200px',
            threshold: 0.5
        }
        );

        const dom = document.querySelectorAll('.demo')
        console.log('dom==>', dom);
        dom.forEach(item => {
            intersectionObserver.observe(item) //observe只能监听一个目标元素
        })
    }

    render() {
        return <div>
            <div id='100' className="exposure__content--one demo" > 100</div>
            <div className="exposure__content" >
                <div id='1' className="exposure__content--one demo" > 1</div>
                <div id='2' className="exposure__content--two demo" > 2</div>
                <div id='3' className="exposure__content--three demo">3</div>
                <div id='4' className="exposure__content--four demo">4</div>
                <div id='5' className="exposure__content--five demo">5</div>
                <div id='6' className="exposure__content--six demo">6</div>
                <div id='7' className="exposure__content--seven demo">7</div>
                <div id='8' className="exposure__content--eight demo">8</div>
                <div id='9' className="exposure__content--nine demo">9</div>
                <div id='10' className="exposure__content--ten demo">10</div>
                <div id='11' className="exposure__content--one demo">11</div>
                <div id='12' className="exposure__content--two demo">12</div>
                <div id='13' className="exposure__content--three demo">13</div>
                <div id='14' className="exposure__content--four demo">14</div>
                <div id='15' className="exposure__content--five demo">15</div>
                <div id='16' className="exposure__content--six demo">16</div>
                <div id='17' className="exposure__content--seven demo">17</div>
                <div id='18' className="exposure__content--eight demo">18</div>
                <div id='19' className="exposure__content--nine demo">19</div>
                <div id='20' className="exposure__content--ten demo">20</div>
            </div >
        </div>
    }
}
