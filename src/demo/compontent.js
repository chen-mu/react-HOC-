//组件
import React from 'react';

const HOC = (options) => {
    return WrappedComponent => {
     class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    name: '',
                };
            }
            componentDidMount() {
                console.log('高阶组件中的componentDidMount');
            }
            render() {
                const { forwardedRef, ...rest } = this.props;
                console.log('forwardedRef')
                console.log(this.props);
                return <div>
                    <WrappedComponent  ref={forwardedRef} {...rest}/>
                    {/* {React.forwardRef((props, ref) => {
                       return <WrappedComponent ref={ref} {...props} />;
                    })} */}
                </div>
            }

        };

        return React.forwardRef((props,ref)=>{
            return <Demo {...props} forwardedRef={ref} />;
        })


    }

}

export default HOC







