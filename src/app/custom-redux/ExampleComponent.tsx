import * as React from 'react';
import {CustomConnect} from './CustomConnect';
import {action1, action2} from './example-actions';

class ExampleComponent extends React.Component<any, any> {
    render() {
        return (<>
            <button onClick={this.props.sendAction1}>Action 1</button>
            <button onClick={() => this.props.action2('I am Payload')}>Action 2</button>
            <div>{JSON.stringify(this.props.action1State)}</div>
            <div>{JSON.stringify(this.props.action2State)}</div>
        </>);
    }
}

const mapStateToProps = state => ({
    action1State: state.action1,
    action2State: state.action2,
});
const mapDispatchToProps = {
    sendAction1: action1,
    action2
};

export default CustomConnect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
