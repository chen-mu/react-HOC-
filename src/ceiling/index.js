import React from 'react';

export default class Index extends React.Component {


    state = {
        value: [
            { name: 'demo' },
            { name: 'demo' },
            { name: 'demo' },
            { name: 'demo' },
            { name: 'demo' }, { name: 'demo' },
        ],
    }

    render() {
        const { value } = this.state
        return <div>
            <div style={{ height: '10rem', marginTop: '2rem' }}>
                <div >demo</div>
            </div>
            <div style={{ height: '2rem', width: '100%', backgroundColor: 'red' }}></div>
            {value.map((item, index) =>
                <div key={index} style={{ height: '10rem', marginTop: '2rem' }}>
                    <div >{item.name}</div>
                </div>
            )}

        </div>
    }
}