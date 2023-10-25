import { ADD_PATH } from "./pathActions";

const initialPathState = {
  pathData: {
      
  }
}

const pathReducer = (state: any = initialPathState, action: any)=> {
  switch(action.type) {
    case ADD_PATH:
      console.log(state)
      return {
        ...state,
        pathData: {
          ...state.pathData,
          [action.payload.pathID]: {
            fromNodeID: action.payload.fromNodeID,
            toNodeID: action.payload.toNodeID
          }
        }
      }
    default: return state;
  }
}

export default pathReducer;