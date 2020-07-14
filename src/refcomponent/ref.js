import React from 'react';
const getRef = WrapperdComponent => {
    return props => {
        const { getRef, ...otherProps } = props
        return <div>
            <div>11111</div>
            <WrapperdComponent ref={getRef} {...otherProps} />
        </div>
    }
}

export default getRef;
