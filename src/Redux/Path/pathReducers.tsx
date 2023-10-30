import { ADD_PATH, DELETE_PATH } from "./pathActions";

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
            componentType: 'path',
            fromNodeID: action.payload.fromNodeID,
            toNodeID: action.payload.toNodeID
          }
        }
      }
    case DELETE_PATH:
      const { [action.payload]: deletedPath, ...newPathData} = state.pathData;
      return {
        ...state,
        pathData: newPathData
      }
    default: return state;
  }
}

export default pathReducer;