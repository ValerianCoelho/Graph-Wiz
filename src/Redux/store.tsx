import { createStore, combineReducers } from 'redux'
import panzoomReducer from './Panzoom/panzoomReducers'
import nodeReducer from './Node/nodeReducers';
import globalFlagReducer from './Global Flags/globalFlagReducers';

const rootReducer = combineReducers({
  node: nodeReducer,
  panzoom: panzoomReducer,
  globalFlags: globalFlagReducer
})

const store = createStore(rootReducer);

export default store;