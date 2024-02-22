import { INCREMENT_LABEL } from "./nodeLabelActions";

const initialNodeLabelState = {
  Alphabetical: 1,
  Numerical: 1,
  "Roman Numeral": 1,
  Custom: 1,
};

const nodeLabelReducer = (state: any = initialNodeLabelState, action: any) => {
  switch (action.type) {
    case INCREMENT_LABEL:
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    default:
      return { ...state };
  }
};

export default nodeLabelReducer;
