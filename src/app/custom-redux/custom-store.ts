export class CustomStore {
    private static _store: any = {};
    private static subscriptions = new Map<number, ((state: any) => any)>();
    private static reducers = [];

    public static set state(newStore) {
        CustomStore._store = newStore;
        CustomStore.subscriptions.forEach(cb => {
            cb(CustomStore._store);
        });
    }

    public static get state() {
        return CustomStore._store;
    }

    public static subscribeStateWatcher(cb: (state: any) => any) {
        const index = CustomStore.subscriptions.size;
        CustomStore.subscriptions.set(index, cb);
        setTimeout(() => {
            CustomStore.state = {...CustomStore.state};
        });
        return index;
    }

    public static unsubscribeStateWatcher(number) {
        CustomStore.subscriptions.delete(number);
    }

    public static injectReducer(cb) {
        CustomStore.reducers.push(cb);
        CustomStore.state = cb(undefined, {type: null});
    }

    public static dispatch(action: { type: any, payload?: any }) {
        console.log(action);
        CustomStore.reducers.forEach(reducer => {
            CustomStore.state = reducer(CustomStore.state, action);
        });
    }
}