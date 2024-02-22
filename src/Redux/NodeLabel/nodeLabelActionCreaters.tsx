import { INCREMENT_LABEL } from "./nodeLabelActions";

export const incrementLabel = (numberSystem: string)=> {
  return {
    type: INCREMENT_LABEL,
    payload: numberSystem
  }
}