import React from 'react';
import UserEffect from './useEffect'
import UserReducer from './useReducer'
import Timer from './time'

export default class Index extends React.Component {



    render() {
        return (<div>
            <UserEffect></UserEffect>
            <UserReducer></UserReducer>
            <Timer></Timer>
        </div>)
    }
} 