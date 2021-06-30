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
    return {
        type: ExampleActionTypes.action2,
        payload
    };
}