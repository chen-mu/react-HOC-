import React, { useEffect, useState } from 'react';
const FuncComponent = () => {

    const Demo = () => {
        return <div>
            函数组件调用
        </div>
    }

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {

        // 多个同步的给set复制只会造成一次页面渲染，这和在同步情况下连续使用多个this.setState效果一样，都只会造成一次页面渲染
        setCount(3)
        // setCount1(3)
        // setCount2(3)
        setTimeout(() => {
            setCount1(3)
        }, 1000)
        setTimeout(() => {
            setCount2(3)
        }, 2000)

        const demo = document.querySelector('.demo')
        const newDemo = demo.cloneNode()
        newDemo.innerHTML = demo.innerHTML
        let $div = document.createElement('div'); // 创建一个dom节点
        $div.innerHTML = '33333' // 给创建的节点添加展示的值
        $div.style.color = 'red' // 设置节点的style
        $div.classList = "demo1 demo2" // 设置节点的class
        $div.setAttribute('attr-id', 1) // 设置节点的自定义属性
        $div.setAttribute('attr-name', '例子')
        // $div.src = '11111'  // img标签的src
        // demo.appendChild($div); // 在某个节点中插入一个节点 ,在末尾添加
        // demo.parentElement.insertBefore($div, demo) // 在demo这个节点之前添加一个节点 ，这个地方需要获取节点的父元素
        demo.parentElement.replaceChild($div, demo) // 替换demo节点，这个地方需要获取节点的父元素
    }, [])

    console.log('渲染');
    return <div>
        {Demo()}
        <Demo />
        {count}===={count1}===={count2}
        <div className="demo">
            11111
        </div>
    </div>
}
export default FuncComponent