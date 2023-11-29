import { ADD_PATH, DELETE_PATH, UPDATE_WEIGHT } from "./pathActions";

export const addPath = (pathID: string, fromNodeID: string, toNodeID: string, weight: number)=> {
  return {
    type: ADD_PATH,
    payload: {
      pathID: pathID,
      fromNodeID: fromNodeID,
      toNodeID: toNodeID,
      weight: weight
    }
  }
}

export const deletePath = (pathID: string)=> {
  return {
    type: DELETE_PATH,
    payload: pathID
  }
}

export const updateWeight = (pathID: string, weight: number)=> {
  return {
    type: UPDATE_WEIGHT,
    payload: {
      pathID: pathID,
      weight: weight
    }
  }
}