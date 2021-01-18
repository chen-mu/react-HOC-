import React from 'react'
export default class BasicInput extends React.Component {

    state = {
        value: ""
    }

    preventShake = (fn) => {
        let timer = null; // 创建定时器id
        return (name) => {
            clearTimeout(timer); // input事件频繁触发，清除之前定时器 
            timer = setTimeout(() => { // 创建新定时器，保证限定时间间隔fn只执行一次
                console.log('执行');
                fn(name);
            }, 500);
        };
    }

    demo = this.preventShake((e) => console.log(e))



    render() {
        return (
            <input placeholder='请输入...'
                value={this.state.value}
                onChange={(e) => {
                    this.demo(e.target.value)
                    // this.preventShake(() => console.log('防抖'))
                    this.setState({
                        value: e.target.value
                    })
                }} />
        )
    }
}



// import React, { useState, useEffect, useRef, useCallback } from 'react';


// export default () => {
//     const [inputValue, setInputValue] = useState('')

//     // 防抖函数
//     function useDebounce(fn, delay) {
//         const { current } = useRef({ fn, timer: null });
//         useEffect(function () {
//             current.fn = fn;
//         }, [fn]);

//         return useCallback(function f(...args) {
//             args[0].persist() // 这里需要这样设置是因为会警告
//             setInputValue(args[0].target.value)  // 这里需要setState一下，不然，得不到value
//             if (current.timer) {
//                 clearTimeout(current.timer);
//             }
//             current.timer = setTimeout(() => {
//                 current.fn.call(this, ...args);
//             }, delay);
//         })
//     }

//     const handleValue = useDebounce(v => { // 获取input的值
//         const value = v.target.value
//         console.log({ value })
//     }, 1000)

//     return (
//         <div >
//             <div >
//                 <input className='input-left' value={inputValue} placeholder='请输入回复内容' onChange={v => handleValue(v)} />
//             </div>
//         </div>
//     )
// }