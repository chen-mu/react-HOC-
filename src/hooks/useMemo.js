import React, { useState, useCallback, useMemo, useEffect } from 'react'

// export default function UserEffect() {
//     const [count, updateCount] = useState(0);
//     const [num, updataNum] = useState(0)

//     const handleClickCount = useCallback(() => {
//         updateCount(count + 1)
//     }, [count]);


//     const handleClickNum = () => {
//         updataNum(num + 1)
//     };

//     // ShowCount 组件使用useMemo包裹
//     const ShowCount = useMemo(() => {
//         console.log('渲染count', count);
//         return <div>
//             count值：{count}
//         </div>
//     }, [count])

//     // ShowNum 组件不用useMemo包裹
//     const ShowNum = () => {
//         console.log('渲染num', num);
//         return <div>
//             num值：{num}
//         </div>
//     }

//     return (<div>
//         <button onClick={handleClickCount}> 点击count+1展示 </button>
//         {ShowCount}
//         <button onClick={handleClickNum}> 点击num+1展示</button>
//         {ShowNum()}
//     </div>)
// }


const useDocumentClick = (callback) => {
    useEffect(() => {
        console.log("effect");
        document.addEventListener("click", callback);
        return () => document.removeEventListener("click", callback);
    }, [callback]);
};

// const Demo = () => {
//     const [count, setCount] = useState(0);
//     // 不用useCallback包裹
//     // useDocumentClick(() => {
//     //     console.log("document click");
//     // });
//     // 使用useCallback包裹
//     useDocumentClick(
//         useCallback(() => {
//             console.log("document click");
//         }, [])
//     );
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>click me!</button>
//         </div>
//     );
// };

const Demo = () => {
    const [temp, setTemp] = useState(5);

    const log = () => {
        console.log(111111);
        setTimeout(() => {
            console.log("3 秒前 temp = 5，现在 temp =", temp);
        }, 3000);
    };

    return (
        <div
            style={{ marginTop: '200px' }}
            onClick={() => {
                setTemp(3);
                log();
            }}
        >
            就点你
        </div>
    );
};
export default Demo