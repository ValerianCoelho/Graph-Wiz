import { TOGGLE_CREATING_PATH } from "./globalFlagActions";

const initialGlobalFlagState = {
  creatingPath: false
}

const globalFlagReducer = (state: any = initialGlobalFlagState, action: any)=> {
  
  switch(action.type) {
    case TOGGLE_CREATING_PATH:
      // console.log(action.payload);
      return {
        ...state,
        creatingPath: !action.payload
      }
    default: return state;
  }
}

export default globalFlagReducer;