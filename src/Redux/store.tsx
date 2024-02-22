import { createStore, combineReducers } from 'redux'
import panzoomReducer from './Panzoom/panzoomReducers'
import nodeReducer from './Node/nodeReducers';
import globalFlagReducer from './Global Flags/globalFlagReducers';
import pathReducer from './Path/pathReducers';
import anchorReducer from './Anchor/AnchorReducer';
import nodeLabelReducer from './NodeLabel/nodeLabelReducers';

const rootReducer = combineReducers({
  node: nodeReducer,
  panzoom: panzoomReducer,
  globalFlags: globalFlagReducer,
  path: pathReducer,
  anchor: anchorReducer,
  nodeLabel: nodeLabelReducer,
})

const store = createStore(rootReducer);

export default store;