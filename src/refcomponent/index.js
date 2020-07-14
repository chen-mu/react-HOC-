import getRef from './ref';
import React from 'react';

@getRef
export default class ChildrenItem extends React.Component {
	render(){
        return <ChildrenItem getRef={(ref) => this.ChildrenItem = ref}  />
    }
}