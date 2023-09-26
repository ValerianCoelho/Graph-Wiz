import { createStore, combineReducers } from 'redux'
import panzoomReducer from './Panzoom/panzoomReducers'
import nodeReducer from './Node/nodeReducers';

const rootReducer = combineReducers({
  node: nodeReducer,
  panzoom: panzoomReducer
})

const store = createStore(rootReducer);

export default store;