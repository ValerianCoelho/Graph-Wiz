import { createStore, combineReducers } from 'redux'
import panzoomReducer from './Panzoom/panzoomReducers'
import nodeReducer from './Node/nodeReducers';
import globalFlagReducer from './Global Flags/globalFlagReducers';
import pathReducer from './Path/pathReducers';

const rootReducer = combineReducers({
  node: nodeReducer,
  panzoom: panzoomReducer,
  globalFlags: globalFlagReducer,
  path: pathReducer
})

const store = createStore(rootReducer);

export default store;