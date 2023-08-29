import {createStore, applyMiddleware} from 'redux';
import {rootReducers} from "../reducers/main"
import thunk from 'redux-thunk';


export const store = createStore(rootReducers,applyMiddleware(thunk))

console.log("prev state " , store.getState())
// store.subscribe(() => console.log("next state ", store.getState()))
