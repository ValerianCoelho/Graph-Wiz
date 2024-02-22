import { INCREMENT_LABEL, UPDATE_CUSTOM_NODE_LABEL } from "./nodeLabelActions";

export const incrementLabel = (numberSystem: string) => {
  return {
    type: INCREMENT_LABEL,
    payload: numberSystem,
  };
};

export const updateCustomNodeLabel = (label: string) => {
  return {
    type: UPDATE_CUSTOM_NODE_LABEL,
    payload: label,
  };
};
