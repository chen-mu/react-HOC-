import React from 'react';
import './index.css'

export default class Recomment extends React.Component {

    state = {
        prizePublicData: [1,2,3,4,5]
    }

    render() {
        const { prizePublicData } = this.state
        return <div className='row'>
            {prizePublicData.map((item ,index)=> 
                <div className='recomment-content' key={index}>
                    <div className='recomment'>
                        <img className="recomment-img" src='http://alpha-2115.caibeike.com/i/916a6bb983a90ca16b4e18b78d8cd006-fCUnMM-OMMwCffhj2@!c300' alt='' />
                        {index %2===0 && <div className='recomment-title'>{'奈尔宝亲子家庭中心奈尔宝亲子家庭中心奈尔宝亲子家庭中心'}</div>}
                        {index %2!==0 && <div className='recomment-title'>{'奈尔宝亲子家庭中心'}</div>}

                    </div>
                </div>
            )}

        </div>



    }
}