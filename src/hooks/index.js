import React from 'react';
import UserEffect from './useEffect'
import UserReducer from './useReducer'
import Timer from './time'
import SetState from './setatate'
import ReactMemo from './reactMemo'
import UserMemo from './useMemo'

export default class Index extends React.Component {



    render() {
        return (<div>
            {/* <UserEffect></UserEffect> */}
            <UserReducer></UserReducer>
            {/* <Timer></Timer>
            <SetState></SetState> */}
            <ReactMemo></ReactMemo>
            <UserMemo></UserMemo>
        </div>)
    }
} 