import React from 'react';
import  Demo  from './demo';

@Demo()
export default class Index extends React.Component{

    constructor(props){
        super(props)
        this.state={demo:111111}
        this.myDemo = React.createRef()
    }

    componentDidMount(){
        // console.log(this.refs)
    }

    onClick=()=>{
        // this.myDemo.current.onRest()
        console.log(this.props.oninit.onRest())
    }


    render(){

        // console.log(this.state)
    
        return<div>    
            <button ref = {this.myDemo} onClick={()=>this.onClick()}> 点击</button>
            {/* <Demo ref = {this.myDemo}></Demo> */}
        </div>
    }
}