//useImperativeHandle可以让你在使用 ref 时自定义暴露给父组件的实例值
//在子组件useImperativeHandle中设置的值，可通过ref转发，可在父组件拿到一个子组件传递给父组件可用的对象
import React, { useState, useRef, useImperativeHandle } from 'react'

export default function App() {
    const counterRef = useRef();
    function reset() {
        console.log(counterRef.current);
        counterRef.current.resetCount();
    }
    return (
        <div style={{ padding: 10 }}>
            <button onClick={reset}>reset</button>
            <MyCounter ref={counterRef} />
        </div>
    );
}
/** ----子组件------------ */
function Counter(props, ref) {
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({
        resetCount: resetCount,
    }));
    function resetCount() {
        setCount(0);
    }
    function increment() {
        setCount(count + 1);
    }
    return (
        <div>
            <hr />
            <span>{count}</span>
            <button onClick={increment}>+1</button>
        </div>
    );
}
const MyCounter = React.forwardRef(Counter);
