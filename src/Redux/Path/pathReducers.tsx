import { ADD_PATH, DELETE_PATH } from "./pathActions";

const initialPathState = {
  pathData: {
      
  }
}

const pathReducer = (state: any = initialPathState, action: any)=> {
  switch(action.type) {
    case ADD_PATH:
      const isRepeated = Object.values(state.pathData).some((pathInfo: any)=> {
        if(action.payload.fromNodeID === pathInfo.fromNodeID && action.payload.toNodeID === pathInfo.toNodeID) {
          return state;
        }
      })
      if(isRepeated) {
        return state;
      }
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