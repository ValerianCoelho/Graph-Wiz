import { ADD_PATH, DELETE_PATH } from "./pathActions";

export const addPath = (pathID: string, fromNodeID: string, toNodeID: string)=> {
  return {
    type: ADD_PATH,
    payload: {
      pathID: pathID,
      fromNodeID: fromNodeID,
      toNodeID: toNodeID
    }
  }
}

export const deletePath = (pathID: string)=> {
  return {
    type: DELETE_PATH,
    payload: pathID
  }
}