import { EventEmitter } from "events";

export const CustomStore = {

  event: new EventEmitter(),

  state: {

  },
  reducer: null,

  createStore: null,
  dispache: null,

}
CustomStore.createStore = (reducer) => {

  CustomStore.reducer = reducer;
  CustomStore.state = reducer(undefined, {})
};

CustomStore.dispache = (action) => {
  CustomStore.state =  CustomStore.reducer(CustomStore.state,action);
  CustomStore.event.emit('new state');
};