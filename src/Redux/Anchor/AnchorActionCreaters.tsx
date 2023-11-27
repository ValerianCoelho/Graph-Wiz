import { ADD_ANCHOR, UPDATE_ANCHOR_COORD } from "./AnchorActions";

export const addAnchor = (pathID: string, a1: {ax1: number, ay1: number}, a2:{ax2: number, ay2: number})=> {
  return {
    type: ADD_ANCHOR,
    payload: {
      pathID: pathID,
      a1: {
        ax1: a1.ax1,
        ay1: a1.ay1
      },
      a2: {
        ax2: a2.ax2,
        ay2: a2.ay2
      }
    }
  }
}

export const updateAnchorCoord = (pathID: string, anchor: string, a: {ax: number, ay: number})=> {
  return {
    type: UPDATE_ANCHOR_COORD,
    payload: {
      pathID: pathID,
      anchor: anchor,
      a: {
        ax: a.ax,
        ay: a.ay
      }
    }
  }
}