import React from 'react';

export default class BarrierFree extends React.Component {

    render() {
        const demo = [
            { term: '上海', des: '上海' },
            { term: '福建', des: '福州' },
            { term: '江西', des: '南昌' },
            { term: '湖北', des: '武汉' },
            { term: '湖南', des: '长沙' },
        ];
        return <div>
            <dl>
                {demo.map((item,index) => (
                    // Fragments should also have a `key` prop when mapping collections
                    <React.Fragment key={index}>
                        <tr>{item.term}</tr>
                        <tr>{item.des}</tr>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    }
}