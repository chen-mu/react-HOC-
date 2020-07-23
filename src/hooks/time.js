import React from 'react';


export default class Index extends React.Component {
    constructor() {
        super();
        this.timeD = React.createRef();             // 天
        this.timeH = React.createRef();             // 时
        this.timeM = React.createRef();             // 分
        this.timeS = React.createRef();             // 秒
        this.timeMS = React.createRef();            //毫秒
    }
    //倒计时
    CountDownNew = (str) => {
        let leftTime = +str - (new Date()).getTime(),
            day1 = Math.floor(leftTime / (1000 * 60 * 60 * 24)),
            hour = Math.floor(leftTime / (1000 * 60 * 60) % 24),
            minute = Math.floor((leftTime / (1000 * 60) % 60)),
            second = Math.floor(leftTime / 1000 % 60),
            timeMilliseSecond = parseInt((leftTime / 100) % 9 + 1);
        return {
            leftTime: leftTime,
            day: day1 < 10 && day1 >= 0 ? '0' + day1 : leftTime < 0 ? '0' : day1,
            hours: hour < 10 && hour >= 0 ? '0' + hour : leftTime < 0 ? '0' : hour,
            minute: minute < 10 && minute >= 0 ? '0' + minute : leftTime < 0 ? '0' : minute,
            second: second < 10 && second >= 0 ? '0' + second : leftTime < 0 ? '0' : second,
            mill: leftTime < 0 ? '0' : timeMilliseSecond
        };
    };

    countDownTime = () => {
        let time = {}, timer;
        timer = setInterval(() => {
            time = this.CountDownNew('1595500237099');

            if (this.timeD.current && this.timeH.current && this.timeM.current && this.timeS.current && this.timeMS.current) {
                this.timeD.current.innerText = time.day || 0;
                this.timeH.current.innerText = time.hours || 0;
                this.timeM.current.innerText = time.minute || 0;
                this.timeS.current.innerText = time.second || 0;
                this.timeMS.current.innerText = time.mill || 0
            }

            if (time.leftTime < 0) {
                clearInterval(timer);
            }
        }, 1);
    }

    componentDidMount() {
        this.countDownTime()
        setInterval(() => {
            console.log(1111)
        }, 1000);
        setTimeout(() => {
            console.log(222);
        }, 1000);


    }


    render() {
        return (<div>
            <div className="prize-count-down" >
                <span className="prize-count-down-span" style={{ marginRight: '0.3rem' }}> 距结束还剩:</span>
                <label ref={this.timeD} />
                <span className="prize-count-down-span" style={{ margin: '0 0.3rem 0 0.1rem' }}>天</span>
                <label ref={this.timeH} />
                <span className="prize-count-down-span" style={{ margin: '0 0.1rem', verticalAlign: 'inherit' }}>:</span>
                <label ref={this.timeM} />
                <span className="prize-count-down-span" style={{ margin: '0 0.1rem', verticalAlign: 'inherit' }}>:</span>
                <label ref={this.timeS} />
                <span className="prize-count-down-span" style={{ margin: '0 0.1rem', verticalAlign: 'inherit' }}>:</span>
                <label ref={this.timeMS} />
            </div>
        </div>)
    }
} 