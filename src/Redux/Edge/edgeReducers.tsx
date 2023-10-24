import { ADD_EDGE, UPDATE_EDGE_COORD } from "./edgeActions";

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
            edgeFromCoord: action.payload.edgeFromCoord,
            edgeToCoord: action.payload.edgeToCoord
          }
        }
      }
    // case UPDATE_EDGE_COORD:
    //   return {

    //   }
  }
}

export default edgeReducer;