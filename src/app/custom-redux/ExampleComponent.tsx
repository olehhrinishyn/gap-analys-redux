import * as React from 'react';
import {CustomConnect} from './CustomConnect';
import {action1, action2, setLogin} from './example-actions';

class ExampleComponent extends React.Component<any, any> {


    render() {
        console.info('props', this.props)
        return (<>
            <button onClick={this.props.sendAction1}>Action 1</button>
            <button onClick={() => this.props.action2(('I am Payload'))}>Action 2</button>
            <button onClick={() => this.props.setLogin(!this.props.isLoggedIn)}>
                {this.props.isLoggedIn ? <span>logout</span> : <span>login</span>}
            </button>
            <div>{JSON.stringify(this.props.action1State)}</div>
            <div>{JSON.stringify(this.props.action2State)}</div>
        </>);
    }
}

const mapStateToProps = state => ({
    action1State: state.counters.action1,
    action2State: state.counters.action2,
    isLoggedIn: state.auth.isLoggedIn
});
const mapDispatchToProps = {
    sendAction1: action1,
    action2,
    setLogin,
};

export default CustomConnect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
