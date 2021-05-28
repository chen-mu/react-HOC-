import React from 'react';
import axios from 'axios';
import { stringify } from 'qs';

import http from './request';

export default class axiosDemo extends React.Component {

    componentDidMount() {

        http({
            method: 'get',
            url: '/api/index',
            data: { name: 1 },
            headers: {
                'x-demo': 1,
                'x-demo2': 2
            }
        }).then((response) => {
            // 200响应
            console.log('response===>', response);
        }, (err) => {
            // 500响应
        })

        http({
            method: 'post',
            url: '/api/index',
            data: { vo: { name: 1 } }
        }).then((response) => {
            // 200响应
            console.log('response===>', response);
        }, (err) => {
            // 500响应
        })
    }


    render() {
        return <div>
            11111
        </div>
    }
}