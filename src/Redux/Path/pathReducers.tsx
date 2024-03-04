import { ADD_PATH, CHANGE_DIRECTION, DELETE_PATH, UPDATE_WEIGHT } from "./pathActions";

const initialPathState = {
  pathData: {
      
  }
}

const pathReducer = (state: any = initialPathState, action: any)=> {
  console.log(state)
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
            toNodeID: action.payload.toNodeID,
            weight: action.payload.weight,
            direction: action.payload.direction,
          }
        }
      }
    case DELETE_PATH:
      const { [action.payload]: deletedPath, ...newPathData} = state.pathData;
      return {
        ...state,
        pathData: newPathData
      }
    case UPDATE_WEIGHT: {
      const { pathID, weight } = action.payload;
      return {
        ...state,
        pathData: {
          ...state.pathData,
          [pathID]: {
            ...state.pathData[pathID],
            weight: weight ? weight : 0
          }

        }
      }
    }
    case CHANGE_DIRECTION: {
      const { pathID, direction } = action.payload;
      return {
        ...state,
        pathData: {
          ...state.pathData,
          [pathID]: {
            ...state.pathData[pathID],
            direction: direction
          }
        }
      }
    }
    default: return state;
  }
}

export default pathReducer;