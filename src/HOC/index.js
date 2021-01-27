import React from 'react';
import HOC from './HOC'

// @HOC({
//     num1: 1
// })
class Index extends React.Component {

    state = {
        num1: 0,
        num2: 0
    }

    componentDidMount() {
        // console.log(234)
        this.setState({
            num1: 1,
            num2: 2
        })

    }

    render() {
        console.log(this.props)
        console.log(this);
        return <div>
            {this.props.num3}
            {this.props.children}
        </div>
    }
}
export default HOC(Index, { num1: 2 });




