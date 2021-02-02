// useIsGone.js
import React, { useState, useEffect, useDebugValue } from 'react';

function useIsGone() {
    const [isGone, setIsGone] = useState(true);

    // useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签。
    useDebugValue("xm isGone", (name) => {
        return `${name}_${new Date().getMinutes()}:${new Date().getSeconds()}`
    });

    useEffect(() => {
        setIsGone(false)

        return () => {
            setIsGone(true)
        };
    }, []);
    return isGone
}

const Index = () => {

    const isGone = useIsGone();

    console.log('isGone：', isGone)

    return <div>自定义hooks</div>

};
export default Index
