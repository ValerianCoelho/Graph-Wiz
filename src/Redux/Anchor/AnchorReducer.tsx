import { ADD_ANCHOR, UPDATE_ANCHOR_COORD } from "./AnchorActions"

const initialAnchorState = {
  anchorData: {

  }
}

const anchorReducer = (state: any = initialAnchorState, action: any)=> {
  switch(action.type) {
    case ADD_ANCHOR:
      return {
        ...state,
        anchorData: {
          ...state.anchorData,
          [action.payload.pathID]: {
            a1: action.payload.a1,
            a2: action.payload.a2
          }
        }
      }
    case UPDATE_ANCHOR_COORD:
      const { pathID, anchor, a } = action.payload;
      return {
        ...state,
        anchorData: {
          ...state.anchorData,
          [pathID]: {
            ...state.anchorData[pathID],
            [anchor]: {
              [`${anchor[0]}x${anchor[1]}`]: a.ax,
              [`${anchor[0]}y${anchor[1]}`]: a.ay
            }
          }
        }
      }
    default: return state;
  }
}

export default anchorReducer;