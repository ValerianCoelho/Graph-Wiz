import { ADD_ANCHOR } from "./AnchorActions";

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