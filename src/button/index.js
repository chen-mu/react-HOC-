import React from 'react';
import './index.css'

export default class Button extends React.Component {

    constructor() {
        super();
        this.button = React.createRef()
    }

    isActive = false;

    onclick = () => {
        console.log(this.button);
        this.button.current.classList.add("click");
        setTimeout(() => {
            this.button.current.classList.remove("click");
        }, 1000)
    }

    render() {
        return (<div >
            <div ref={this.button} className="button" onClick={this.onclick}>开心收下</div>
        </div>)
    }
}