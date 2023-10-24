import { TOGGLE_CREATING_PATH } from "./globalFlagActions";

const initialGlobalFlagState = {
  creatingPath: true
}

const globalFlagReducer = (state: any = initialGlobalFlagState, action: any)=> {
  switch(action.type) {
    case TOGGLE_CREATING_PATH:
      return {
        ...state,
        creatingPath: !action.payload
      }
    default: return state;
  }
}

export default globalFlagReducer;