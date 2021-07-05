export enum ExampleActionTypes {
    action1 = 'action-1',
    action2 = 'action-2',
}

export function action1() {
    return {
        type: ExampleActionTypes.action1,
    };
}

export function action2(payload) {

    const a =  {
        type: ExampleActionTypes.action2,
        payload
    };

    console.info('in action', a)

    return a;
}

export const setLogin = (payload: boolean) => {
    return {
        type: 'SET_LOG_IN',
        payload
    }
}