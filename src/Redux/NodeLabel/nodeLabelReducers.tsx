import { INCREMENT_LABEL, UPDATE_CUSTOM_NODE_LABEL } from "./nodeLabelActions";

const initialNodeLabelState = {
  Alphabetical: 1,
  Numerical: 1,
  "Roman Numeral": 1,
  Custom: "",
};

const nodeLabelReducer = (state: any = initialNodeLabelState, action: any) => {
  switch (action.type) {
    case INCREMENT_LABEL: {
      if (action.payload === "Custom") {
        return { ...state };
      }
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    }
    case UPDATE_CUSTOM_NODE_LABEL: {
      return {
        ...state,
        ['Custom']: action.payload,
      }
    }
    default:
      return { ...state };
  }
};

export default nodeLabelReducer;
