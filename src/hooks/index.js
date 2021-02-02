import React, { useEffect } from 'react';
import UserEffect from './useEffect'
import UserReducer from './useReducer'
import Timer from './time'
import SetState from './setatate'
import ReactMemo from './reactMemo'
import UserMemo from './useMemo'
import UseContext from './useContext'
import UseImperativeHandle from './useImperativeHandle'
import UseLayoutEffect from './useLayoutEffect'
import UseIsGone from "./useIsGone"


export default class Index extends React.Component {

    componentDidMount() {
        // let demo = [1, 2, 3, 4]
        // const demo1 = demo.every(u => u >= 4)
        // console.log('demo1====>', demo1);
        // console.log('demo1====>', demo.length = 2, demo);

        // const isGone = useIsGone();
        // console.log(useIsGone());
        // console.log('isGone：', isGone)
    }

    render() {
        return (<div>
            <UseIsGone></UseIsGone>
            <UseLayoutEffect></UseLayoutEffect>
            <UseImperativeHandle></UseImperativeHandle>
            <UseContext></UseContext>
            {/* <UserEffect></UserEffect> */}
            {/* <UserReducer></UserReducer> */}
            {/* <Timer></Timer>
            <SetState></SetState> */}
            {/* <ReactMemo></ReactMemo> */}
            {/* <UserMemo></UserMemo> */}
        </div>)
    }
} 