import React, { useState, useEffect } from 'react'

// export default function UserEffect() {

//     const [num, updateNum] = useState(0);
//     const [count, updateCount] = useState(0);
//     const [name, setName] = useState(0);
//     const dom = useRef(0)
//     //浏览器标签页被隐藏或显示的时候会触发visibilitychange事件
//     useEffect(() => {
//         window.addEventListener('pagehide',
//             () => setTimeout(() => {
//                 console.log('pagehide')
//             }, 3000))
//         window.addEventListener('pageshow', () => console.log('pageshow'))
//         window.addEventListener('visibilitychange', (event) => console.log(document.visibilityState),)
//         return () => {
//             window.removeEventListener('pageshow', () => console.log('pageshow'))
//             window.removeEventListener('visibilitychange', () => console.log('卸载'))
//         }
//     }, []);

//     useEffect(() => {
//         dom.current.addEventListener('click', () => updateNum(num + 1));
//         console.log('count', count)
//     }, [num]);

//     const handleClick = useCallback(() => {
//         console.log('count', count)
//         updateCount(count + 1)
//     }, [count]);

//     const handleClickName = useCallback(() => {
//         console.log(count);
//         setTimeout(() => {
//             setName(name + 1);
//         }, 3000);
//     }, [name])

//     return (<div>
//         <div> 当前点击了{count}次 </div>
//         <div ref={dom}>{num}</div>
//         <button onClick={() => { window.location.href = "http://www.baidu.com" }}> 点我跳转 </button>
//         <button onClick={handleClick}> 展示现在的值 </button>


//         <div>
//             <p>{name}</p>
//             <button onClick={() => setName(name + 1)}>
//                 setCount
//             </button>
//             <button onClick={handleClickName}>
//                 Delay setCount
//             </button>
//         </div>
//     </div>)

// }

export default function ToastPage() {
    const [name1, updateName1] = useState('name1');
    const [name2, updateName2] = useState('name2');
    const [name3, updateName3] = useState('name3');
    const [name4, updateName4] = useState('name4');

    useEffect(() => {
        console.log('----第一次变更---');
        setTimeout(() => {
            console.log('---1---');
            updateName1('name1111');
            console.log('---2---');
            updateName4('name1444444');
            console.log('---3---');
            updateName3('name133333');
        }, 100);

    }, []);


    useEffect(() => {
        console.log('----变更了name1---');
        setTimeout(() => {
            console.log('---4---');
            updateName3('name333333');
            console.log('---5---');
            updateName4('name544444');
        }, 100);
    }, [name1]);

    useEffect(() => {
        console.log('---6---');
        updateName2('name344444');
    }, [name4]);


    console.log('---render---');


    return <div style={{ marginTop: '100px' }} className="doc-ui-btns">
        <div>name1: {name1}</div>
        <div>name1: {name2}</div>
        <div>name3: {name3}</div>
        <div>name4: {name4}</div>
    </div>;
}
