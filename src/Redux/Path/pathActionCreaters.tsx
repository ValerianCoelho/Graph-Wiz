import { ADD_PATH, DELETE_PATH, UPDATE_WEIGHT, CHANGE_DIRECTION } from "./pathActions";

export const addPath = (pathID: string, fromNodeID: string, toNodeID: string, weight: number, direction: string)=> {
  return {
    type: ADD_PATH,
    payload: {
      pathID: pathID,
      fromNodeID: fromNodeID,
      toNodeID: toNodeID,
      weight: weight,
      direction: direction,
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

export const changeDirection = (pathID: string, direction: string)=> {
  return {
    type: CHANGE_DIRECTION,
    payload: {
      pathID: pathID,
      direction: direction
    }
  }
}