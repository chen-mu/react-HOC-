import React, { useState, useCallback, useEffect, useRef } from 'react'

export default function UserEffect() {

    const [num, updateNum] = useState(0);
    const [count, updateCount] = useState(0);
    const [name, setName] = useState(0);
    const dom = useRef(0)
    //浏览器标签页被隐藏或显示的时候会触发visibilitychange事件
    useEffect(() => {
        window.addEventListener('pagehide',
            () => setTimeout(() => {
                console.log('pagehide')
            }, 3000))
        window.addEventListener('pageshow', () => console.log('pageshow'))
        window.addEventListener('visibilitychange', (event) => console.log(document.visibilityState),)
        return () => {
            window.removeEventListener('pageshow', () => console.log('pageshow'))
            window.removeEventListener('visibilitychange', () => console.log('卸载'))
        }
    }, []);

    useEffect(() => {
        dom.current.addEventListener('click', () => updateNum(num + 1));
        console.log('count', count)
    }, [num]);

    const handleClick = useCallback(() => {
        console.log('count', count)
        updateCount(count + 1)
    }, [count]);

    const handleClickName = useCallback(() => {
        console.log(count);
        setTimeout(() => {
            setName(name + 1);
        }, 3000);
    }, [name])

    return (<div>
        <div> 当前点击了{count}次 </div>
        <div ref={dom}>{num}</div>
        <button onClick={() => { window.location.href = "http://www.baidu.com" }}> 点我跳转 </button>
        <button onClick={handleClick}> 展示现在的值 </button>


        <div>
            <p>{name}</p>
            <button onClick={() => setName(name + 1)}>
                setCount
            </button>
            <button onClick={handleClickName}>
                Delay setCount
            </button>
        </div>
    </div>)

}