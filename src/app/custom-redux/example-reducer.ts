import {ExampleActionTypes} from './example-actions';

const initialState = {
    action1: {
        calledTimes: 0,
        lastCallTimeStamp: null
    },
    action2: {
        calledTimes: 0,
        lastCallTimeStamp: null,
        payload: null
    }
};

export function customReducer(state: any = initialState, action: {
    type: ExampleActionTypes,
    payload: any,
}) {
    console.info('reducer', state, action);

    switch (action.type) {
        case ExampleActionTypes.action1:
            return {
                ...state,
                action1: {
                    calledTimes: ++state.action1.calledTimes,
                    lastCallTimeStamp: new Date().getTime()
                }
            };
        case ExampleActionTypes.action2:
            return {
                ...state,
                action2: {
                    calledTimes: ++state.action2.calledTimes,
                    lastCallTimeStamp: new Date().getTime(),
                    payload: action.payload
                }
            };
        default:
            return state;
    }

}
