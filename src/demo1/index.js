import React from 'react';
import Demo1 from './demo'

@Demo1({
    num1:1
})
export default class Index extends React.Component{

    state={
        num1:0,
        num2:0
    }

    componentDidMount(){
        console.log(234)
        this.setState({
            num1:1,
            num2:2
        })
        
    }

    render(){
        console.log(this.props)
        return<div>
                {this.props.num3}


        </div>
    }
}
// export default Demo1(Index,{num1:1});




