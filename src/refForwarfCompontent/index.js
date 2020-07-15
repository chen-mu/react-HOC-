
import React, { Component, createRef } from 'react';

import bindRef from './compoment';

const FocusInput = React.forwardRef((props, ref) =>
    <input type="text" ref={ref} />
);

const FocusInputWithRef = bindRef(FocusInput);

class ForwardRef extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }

    componentDidMount() {
        const { current } = this.ref;
        current.focus();
    }

    render() {
        return (
            <div>
                <p>forward ref</p>

                <FocusInputWithRef ref={this.ref} />
                <div>11111</div>
            </div>
        );
    }
}
export default ForwardRef;
