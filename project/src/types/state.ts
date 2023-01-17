import { STORE } from '../store';

export type State = ReturnType<typeof STORE.getState>;

export type AppDispatch = typeof STORE.dispatch;
