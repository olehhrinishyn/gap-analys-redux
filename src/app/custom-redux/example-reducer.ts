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

export type AuthState = {
    isLoggedIn: boolean
}

export type reducerFunction<T> = (state: T, action: {type: string, payload: any}) => T

export const authReducer: reducerFunction<AuthState> = (state: AuthState = {isLoggedIn: false}, action: {type: string, payload: boolean} ): AuthState => {
    switch (action.type) {
        case 'SET_LOG_IN':
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
} 



export const combineReducer = (reducersObject: Record<string, reducerFunction<any>>) => {
    return (state, action) => {
        const newState = {...state}
        const keys = Object.keys(reducersObject);

        keys.forEach(key => newState[key] = reducersObject[key](state, action))
        return newState;
    }
}