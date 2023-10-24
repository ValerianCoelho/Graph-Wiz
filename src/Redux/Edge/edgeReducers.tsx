import { addEdge } from "./edgeActionCreaters";
import { ADD_EDGE } from "./edgeActions";

const initialEdgeState = {
  edgeData: {
    // edge Objects
  }
}

const edgeReducer = (state: any = initialEdgeState, action: any)=> {
  switch(action.type) {
    case ADD_EDGE:
      return {
        ...state,
        edgeData: {
          ...state.edgeData,
          [action.payload.edgeID]: {
            fromNodeID: action.payload.fromNodeID,
            toNodeID: action.payload.toNodeID,
            pathFromCoord: action.payload.pathFromCoord,
            pathToCoord: action.payload.pathToCoord
          }
        }
      }
  }
}