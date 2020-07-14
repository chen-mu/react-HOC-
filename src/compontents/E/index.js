import React from 'react';
import './index.css';


const simpleHoc = (rappedComponent) => {
    return WrappedComponent => {

        return class extends React.Component {

            state = {
                name: ''
            }

            onChange = (event) => {
                console.log(event.target.value)
                this.setState({
                    name: event.target.value
                })
            }

            render() {
                const newProps = {
                    type: 'HOC',
                    value: this.state.name,
                    onChange: this.onChange,
                };
                return (
                    <div className="a-container">
                        <div className="header">
                            <div className="title">{rappedComponent.name}</div>
                            <div className="close">X</div>
                        </div>
                        <div>
                            <WrappedComponent
                                sex={'男'}
                                {...this.props}
                                {...newProps}
                                //  getRef={(ref) => {
                                //     // 该回调函数被作为常规的props属性传递
                                //     this.headerDemo = ref;
                                //   }}
                                />;
                        </div>
                    </div>
                )
            }
        }
    }

}
export default simpleHoc;


