import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useMemo } from 'react';

export default function UserEffect() {
    const [count, updateCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('count', count)
        updateCount(count + 1)
    }, [count]);

    const showCount = useMemo(() => {
        console.log(1111);
        return <div>
            展示在最后：{count}
        </div>
    }, [count])


    return (<div>
        <div> 当前点击了{count}次 </div>
        {/* <div ref={dom}>{num}</div> */}
        {/* <button onClick={() => { window.location.href = "http://www.baidu.com" }}> 点我跳转 </button> */}
        <button onClick={handleClick}> 展示现在的值 </button>
        {showCount}
    </div>)

}