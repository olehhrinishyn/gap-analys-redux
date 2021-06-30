import React from 'react';
import {CustomStore} from './custom-store';
import {customReducer} from './example-reducer';

export class CustomProvider extends React.Component<{ store: CustomStore }, any> {
    constructor(props) {
        super(props);
        props.store.injectReducer(customReducer)
    }

    render() {
        return this.props.children;
    }
}
