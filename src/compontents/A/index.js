import React from 'react';
import './index.css';


const simpleHoc = (options) => {
    return WrappedComponent => {

        return class  extends React.Component {
            render() {
                return (
                    <div className="a-container">
                        <div className="header">

                            <div className="title">{options.name}</div>
                            <div className="close">X</div>
                        </div>
                        <div>
                            <WrappedComponent sex={'男'} {...this.props} />
                        </div>
                    </div>
                )
            }
        }
    }

}
export default simpleHoc;


