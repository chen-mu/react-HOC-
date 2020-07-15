import React from 'react';

// const FancyButton = React.forwardRef((props, ref) => {
//     console.log('-------');
//     console.log(props);
//     console.log('-------');
//     return (
//     <button ref={ref} className="FancyButton" onClick={()=> console.log('点击')}>
//         {props.children}11111
//     </button>
// )});

class FancyButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    onReset=()=>{
        console.log('重置')
    }

    render() {
        return <button className="FancyButton">
            {this.props.children}
             </button>
    }

}

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.ref = React.createRef();
    }

    componentDidMount() {
        console.log(this.ref.current);
        this.ref.current.onReset()
    }



    render() {
        return <FancyButton ref={this.ref} className='normal'>点击!</FancyButton>;
    }
} 
