import { ADD_ANCHOR } from "./AnchorActions"

const initialAnchorState = {
  anchorData: {

  }
}

const anchorReducer = (state: any = initialAnchorState, action: any)=> {
  switch(action.type) {
    case ADD_ANCHOR:
      console.log('ANCHOR DATA', state.anchorData);
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
    default: return state;
  }
}

export default anchorReducer;