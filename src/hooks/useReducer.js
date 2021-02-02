import React, { useReducer } from 'react';



function Counter() {

    function init() {
        return { count: 0 };
    }
    let initDta = { count: 0 }

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            default:
                throw new Error();
        }
    }
    /*
    第三个参数 init 是什么？它是一个可选值，可以用来惰性提供初始状态。
    这意味着我们可以使用使用一个 init 函数来计算初始状态/值，而不是显式的提供值。
    如果初始值可能会不一样，这会很方便，最后会用计算的值来代替初始值。
    */
    const [state, dispatch1] = useReducer(reducer, {}, init);
    // const [state, dispatch1] = useReducer(reducer, initDta);
    console.log(state);
    return (
        <React.Fragment>
            Count值: {state.count}
            <button
                onClick={() => dispatch1({ type: 'reset', })}>
                重置
        </button>
            <div>
                <button onClick={() => dispatch1({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch1({ type: 'increment' })}>+</button>
            </div>
        </React.Fragment>
    );
}

export default Counter;


// import React, { useReducer } from 'react';



// const initialFormDate = {
//     name: '芋圆',
//     color: '紫色',
//     count: '15'
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'patch':
//             return { ...state, ...action.newFormDate };
//         case 'reset':
//             return initialFormDate;
//         default:
//             throw new Error('错误');
//     }
// };


// const App = () => {
//     //将初始值和所有操作传给useReducer，已得到读写API
//     const [formData, dispatch] = useReducer(reducer, initialFormDate);

//     const onSubmit = () => {

//     }
//     const onReset = () => {
//         dispatch({ type: 'reset' })
//     }
//     return (
//         <form onSubmit={onSubmit} onReset={onReset}>
//             <div>
//                 <div>
//                     <label>名称
//                         <input value={formData.name} onChange={e => dispatch({ type: 'patch', newFormDate: { name: e.target.value } })} />
//                     </label>
//                 </div>
//                 <div>
//                     <label>颜色
//                         <input value={formData.color} onChange={e => dispatch({ type: 'patch', newFormDate: { color: e.target.value } })} />
//                     </label>
//                 </div>
//                 <div>
//                     <label>数目
//                         <input value={formData.count} onChange={e => dispatch({ type: 'patch', newFormDate: { count: e.target.value } })} />
//                     </label>
//                 </div>
//                 <div>
//                     <button type='submit'>提交</button>
//                     <button type='reset'>重置</button>
//                 </div>
//                 {JSON.stringify(formData)}
//             </div>
//         </form>
//     );
// };

// export default App

