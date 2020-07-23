import React from 'react';

export default class Index extends React.Component {


    state = {
        value: [
            { name: 'demo' },
            { name: 'demo' },
            { name: 'demo' },
            { name: 'demo' },
        ],
    }

    render() {
        const { value } = this.state
        return <div>
            {value.map((item, index) =>
                <div key={index} style={{ height: '10rem', marginTop: '2rem' }}>
                    <div >{item.name}</div>
                </div>
            )}

        </div>
    }
}