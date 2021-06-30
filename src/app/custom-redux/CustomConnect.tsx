import * as React from 'react';
import {CustomStore} from './custom-store';

export function CustomConnect(
    mapStateToProps?: (state) => ({
        [key: string]: any
    }),
    mapDispatchToProps?: {
        [key: string]: (...arg: any[]) => { type: any, payload?: any };
    }
) {
    return (Component) => {
        class CustomReduxConnected extends React.Component<any, any> {
            state = {};

            dispatchProps = Object.keys(mapDispatchToProps).reduce((props, key) => {
                props[key] = (...arg) => {
                    CustomStore.dispatch(mapDispatchToProps[key](...arg));
                };
                return props;
            }, {});

            stateWatcherIndex = null;

            constructor(props) {
                super(props);
                this.stateWatcherIndex = CustomStore.subscribeStateWatcher(state => {
                    this.setState(mapStateToProps(state));
                });
            }

            componentWillUnmount(): void {
                if (~this.stateWatcherIndex) {
                    CustomStore.unsubscribeStateWatcher(this.stateWatcherIndex);
                }
            }

            render() {

                const stateProps = this.state;

                const newProps = {
                    ...this.props,
                    ...this.dispatchProps,
                    ...stateProps,
                };
                return <Component {...newProps} />;
            }
        }


        return CustomReduxConnected;
    };
}