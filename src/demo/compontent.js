//组件
import React from 'react';

const HOC = (options) => {
    return WrappedComponent => {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    name: '',
                };
               
            }

            componentDidMount(){
                console.log('高阶组件中的componentDidMount');
            }

            render() {
                console.log(this.props);
                const newProps = {
                    name: {
                        value: this.state.name,
                        // onChange: this.onChange,
                    },
                };
                return <div>
                    {/* <div>{options.name}</div> */}
                    <WrappedComponent {...this.props} {...newProps} />;
                </div>
            }
        };
    }
}

export default HOC







