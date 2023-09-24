import { createStore } from 'redux'
import panzoomReducer from './Panzoom/panzoomReducers'

const store = createStore(panzoomReducer);

export default store;