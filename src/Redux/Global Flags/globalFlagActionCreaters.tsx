import { TOGGLE_CREATING_PATH } from "./globalFlagActions";

export const toggleCreatingPath = (creatingPath: boolean)=> {
  return {
    type: TOGGLE_CREATING_PATH,
    payload: creatingPath
  }
}
